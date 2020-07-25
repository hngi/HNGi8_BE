<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
>>>>>>> e489c2b3425bb2a2e9ecf97a733003bc40115015

const Schema = mongoose.Schema

<<<<<<< HEAD
const mentorLoginSchema = Schema({
=======
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
>>>>>>> e489c2b3425bb2a2e9ecf97a733003bc40115015

    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
    }
   
})

const MentorLogin = mongoose.model("MentorLogin", mentorLoginSchema);
module.exports = MentorLogin; 