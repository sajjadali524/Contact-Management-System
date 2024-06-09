const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;