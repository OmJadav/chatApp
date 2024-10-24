const express = require("express");
const dotenv = require("dotenv");
const path = require("path")
const cors = require("cors")
const mongoose = require("mongoose");
dotenv.config();
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRoute")
const userRoutes = require("./routes/userRoute")
const messageRoutes = require("./routes/messageRoute");
const { app, server } = require("./socket/socket");

const mongoUrl = process.env.MONGO;
const port = process.env.PORT;

app.use(cors({
    origin: "https://lets-talk-gray.vercel.app",
    // origin: "http://localhost:3000",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes)


try {
    mongoose.connect(mongoUrl)
    console.log("MongoDB connected ✅");
} catch (error) {
    console.log(error);
}


server.listen(port, () => {
    console.log(`Server is running on ${port} 🔥`);
})