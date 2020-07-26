
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;
const internApplicationSchema = Schema({
  fullName: {
    type: String,
    required: true
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

  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },

  track: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  },
  employmentStatus: {
    type: String,
    enum: ['employed', 'unemployed', 'student'],
    default: 'unemployed'
  },

  about: {
    type: Date,
    default: Date.now
  }
});

internApplicationSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Interns', internApplicationSchema);
