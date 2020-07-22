const mongoose = require("mongoose");

const Schema = mongoose.Schema

const internLoginSchema = Schema({

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

const InternLogin = mongoose.model("InternLogin", internLoginSchema);

module.exports = InternLogin; 