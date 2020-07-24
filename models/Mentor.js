const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentorSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_number: {
    type: Number,
    required: true
  },
  cv_link: {
    type: String,
    default: 'blank'
  },
  application_state: {
    type: String,
    enum: ['accepted', 'declined', 'pending'],
    default: 'pending'
  },
  employment_status: {
    type: String,
    enum: ['employed', 'unemployed', 'student'],
    default: 'unemployed'
  },
  country: {
    type: String
  },
  state_of_residence: {
    type: String
  },
  interest: {
    type: String
  }
}, {
  timestamp: true
});

module.exports = mongoose.model('Mentor', mentorSchema);
