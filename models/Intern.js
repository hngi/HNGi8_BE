const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const internApplicationSchema = Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phoneNumber: {
    type: Number,
    required: true
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

  country: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  password: {
    type: String,
    required: true
  },

username: {
  type: String,
  required: true,
  unique: true,
  minlength: 3
}

});


internApplicationSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Interns', internApplicationSchema);
