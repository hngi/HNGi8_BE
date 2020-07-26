const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;
const contactUsSchema = Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  subject: {
    type: String
  },

  message: {
    type: String,
    required: true
  }
});
contactUsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Contacts', contactUsSchema);
