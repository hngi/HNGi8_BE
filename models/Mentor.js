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
  phoneNumber: {
    type: Number,
    required: true
  },
  cvLink: {
    type: String,
    default: 'blank'
  },
  applicationState: {
    type: String,
    enum: ['accepted', 'declined', 'pending'],
    default: 'pending'
  },
  employmentStatus: {
    type: String,
    enum: ['employed', 'unemployed', 'student'],
    default: 'unemployed'
  },
  country: {
    type: String,
    required: true
  },
  stateOfResidence: {
    type: String
  },
  interest: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Mentors', mentorSchema);
