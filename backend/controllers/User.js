const User = require("../models/userModel");


exports.getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in get all users ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}