const mongoose = require("mongoose");

const Schema = mongoose.Schema

const mentorLoginSchema = Schema({

    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
    }
   
})

module.exports = mongoose.model("MentorLogin", mentorLoginSchema);
