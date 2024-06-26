const express = require("express");
const dotenv = require("dotenv");
const path = require("path")
const mongoose = require("mongoose");
dotenv.config();
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRoute")
const userRoutes = require("./routes/userRoute")
const messageRoutes = require("./routes/messageRoute");
const { app, server } = require("./socket/socket");

const mongoUrl = process.env.MONGO;
const port = process.env.PORT;
// const __dirname = path.resolve();


app.use(express.json());
app.use(cookieParser());


app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes)

app.use(express.static(path.join(__dirname, "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

try {
    mongoose.connect(mongoUrl)
    console.log("MongoDB connected ✅");
} catch (error) {
    console.log(error);
}


server.listen(port, () => {
    console.log(`Server is running on ${port} 🔥`);
})