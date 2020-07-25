const mongoose = require("mongoose");

const Schema = mongoose.Schema
const contactUsSchema = Schema({
    name: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Contacts", contactUsSchema);
