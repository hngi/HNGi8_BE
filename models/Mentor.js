const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
  track: {
    type: String,
    enum: ['frontend', 'mobile', 'design', 'backend'],
    required: true
  },
  cvLink: {
    type: String,
    required: true,
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
    required: [true, 'is required']
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
mentorSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Mentors', mentorSchema);
