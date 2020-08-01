const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const internApplicationSchema = Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
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

  country: {
    type: String,
    required: [true, 'is required']
  },

  state: {
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

  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'female'
  },

  dob: {
    type: Date
  },

  internApplicationStatus: {
    type: String,
    enum: ['accepted', 'declined', 'pending'],
    default: 'pending'
  },

  // date: {
  //   type: Date,
  //   default: Date.now
  // },
}, 
{
  timestamps: true
});


internApplicationSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Interns', internApplicationSchema);
