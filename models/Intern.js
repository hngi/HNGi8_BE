const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const internApplicationSchema = Schema({
  fullName: {
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
    required: false
  },

  city: {
    type: String,
    required: false
  },

  state: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  track: {
    type: String,
    enum: ['frontend', 'mobile', 'design', 'backend'],
    required: true
  },

  employmentStatus: {
    type: String,
    enum: ['employed', 'unemployed', 'student'],
    default: 'unemployed'
  },

  date: {
    type: Date,
    default: Date.now
  },

  password: {
    type: String,
    required: false
  },

// username: {
//   type: String,
//   required: false,
//   index: {unique: false},
//   minlength: 3
// }

});


internApplicationSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Interns', internApplicationSchema);
