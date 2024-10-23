const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken")
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid email or password" });
        } else {
            generateTokenAndSetCookie(res, user._id);
            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                userName: user.userName,
                email: user.email,
                profilePic: user.profilePic,
                gender: user.gender,
            });
        }
    } catch (error) {
        console.log("Error: Login Controller --", error);
        res.status(500).json({ error: "Error in Login user" });
    }
};

exports.signupUser = async (req, res) => {
    try {
        const { fullName, email, password, gender } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User Already Exists!" });
        } else {
            //for username generating
            const joinName = fullName.split(" ");
            const userName = joinName[0].toLowerCase() + joinName[1].toLowerCase();

            //for HASH password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            //profile pic genderwise
            const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
            const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

            //creating user
            const newUser = new User({
                fullName,
                userName,
                email,
                password: hashedPassword,
                gender,
                profilePic: gender === "male" ? maleProfile : femaleProfile,
            });

            if (newUser) {
                generateTokenAndSetCookie(res, newUser._id);
                await newUser.save();
                res.status(201).json({
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    userName: newUser.userName,
                    email: newUser.email,
                    profilePic: newUser.profilePic,
                    message: "Signed up Successfully"
                });
            } else {
                res.status(400).json({ error: "Invalid signup user data" })
            }
        }
    } catch (error) {
        console.log("Error: Signup Controller --", error);
        res.status(500).json({ error: "Error in signup user" });
    }
};

exports.logoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out Successfully" })
    } catch (error) {
        console.log("Error: logout Controller --", error);
        res.status(500).json({ error: "Error in logout user" });
    }
};
