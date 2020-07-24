const mongoose = require('mongoose');

const { Schema } = mongoose;
const internsSchema = Schema({
  name: {
    type: String,
    required: true
  },
  internId:{
    type: Number,
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
    required: true,
    default: 'blank'
  },
  interest: {
    type: String, 
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String
  }, 
  employmentStatus: {
    type: String,
    enum: ['employed', 'unemployed', 'student'],
    default: 'unemployed'
  },
  about: {
    type: String
  },
  registrationDate:{
    type:Date,
    default:Date.now
},
applicationState: {
  type: String,
  enum: ['accepted', 'declined', 'pending'],
  default: 'pending'
},
});

module.exports = mongoose.model('Interns', internsSchema);