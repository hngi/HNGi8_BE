const mongoose = require("mongoose");

const Schema = mongoose.Schema
const internApplicationSchema = Schema({
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
   
    date: {
        type: Date,
        default: Date.now
        }
})

const InternApplication = mongoose.model("internApplication", internApplicationSchema);
module.exports = InternApplication; 
