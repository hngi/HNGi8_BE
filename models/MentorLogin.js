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

const MentorLogin = mongoose.model("MentorLogin", mentorLoginSchema);
module.exports = MentorLogin; 