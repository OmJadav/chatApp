const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.protectRoute = async (req, res, next) => {

    try {
        let token;
        token = req.cookies.jwt;
        // console.log(token);

        if (!token) {
            return res.status(401).json({ error: "Unauthorized !!- No Token Provided" });
        }
        else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            if (!decoded) {
                return res.status(401).json({ error: "Unauthorized !!- Invalid Token !" });

            } else {
                const user = await User.findById(decoded.userId).select("-password");

                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                } else {
                    req.user = user;
                    next();
                }
            }
        }
    } catch (error) {
        console.log("Error in protect Route middleware :--", error);
        res.status(500).json({ error: "Protect Route Error " });
    }
}