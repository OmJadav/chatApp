const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRoute")
const userRoutes = require("./routes/userRoute")
const messageRoutes = require("./routes/messageRoute")

const mongoUrl = process.env.MONGO;
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());


app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes)
try {
    mongoose.connect(mongoUrl)
    console.log("MongoDB connected ✅");
} catch (error) {
    console.log(error);
}


app.listen(port, () => {
    console.log(`Server is running on ${port} 🔥`);
})