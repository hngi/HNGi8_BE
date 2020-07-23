const mongoose = require("mongoose");

const Schema = mongoose.Schema

const mentorApplicationSchema = Schema({

    fullName:{
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: true
        },

    password: {
            type: String,
            required: true
        },

    phoneNumber:{
        type: Number,
        required: true,
        unique: true
    },

     address: {
            type: String,
            required: true
            },

    city: {
            type: String,
            required: true
            },

    state: {
             type: String,
            required: true
                },

    country:{
        type: String,
        required: true
    },
   
    createdAt: {
        type: Date,
        default: Date.now()
        }
})

module.exports= mongoose.model("Mentors", mentorApplicationSchema);
