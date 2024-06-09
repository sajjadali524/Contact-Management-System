const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const router = express.Router();

// register account
router.post("/register", async(req, res) => {
    const {username, email, password} = req.body;
    const hashPassord = await bcrypt.hash(password, 10);
    try {
        const existingUser = await userModel.findOne({ email });
        if(existingUser) {
            res.status(400).json({message: "user already exist"})
        } else {
            const newUser = await userModel.create({username, email, password: hashPassord});
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

//login user
router.post("/login", async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user) {
            res.status(400).status({message: "user not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            res.status(400).status({message: "email and password is incorrect"})
        }else {
        const userData = {
            userID: userModel._id
        }
        const token = jwt.sign(userData, process.env.TOKEN_SECRET, {expiresIn: "1d"});
        res.cookie("token", token, {expiresIn: "1d"}).status(200).json({message: "login success"})}
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).send("Logged out successfully");
});


module.exports = router;