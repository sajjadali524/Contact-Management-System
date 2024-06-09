const express = require("express");
const contactModel = require("../models/contacts");

const router = express.Router();
router.post("/add-contact", async (req, res) => {
    const {userID, fname, lname, number} = req.body;
    try {
        const newContact = await contactModel.create({userID, fname, lname, number});
        res.status(200).json({message: "contact created"})
    } catch (error) {
        res.status(500).json({message: "Interval server error"})
        console.log(error)
    }
})

router.get("/contact", async(req, res) => {
    try {
        const contacts = await contactModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})
module.exports = router;