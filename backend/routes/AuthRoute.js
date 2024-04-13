const express = require("express");
const { loginUser, logoutUser, signupUser } = require("../controllers/Auth");

const router = express.Router();


router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/signup', signupUser)


module.exports = router;