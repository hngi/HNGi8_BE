const mongoose = require("mongoose");

const Schema = mongoose.Schema
const contactUsSchema = Schema({
    name: {
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

    subject:{
        type: String
    },

    message:{
        type: String,
        required: true
}
})

const ContactUs = mongoose.model("ContactUs", contactUsSchema);
module.exports = ContactUs; 
