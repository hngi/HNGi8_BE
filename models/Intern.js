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
    required: true
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

  birthDate: {
    type: Date,
    required: true
},

  date: {
    type: Date,
    default: Date.now
  },
}, 
{
  timestamps: true
});


//   address: {
//     type: String,
//     required: false
//   },

//   city: {
//     type: String,
//     required: false
//   },

//   password: {
//     type: String,
//     required: false
//   },

// username: {
//   type: String,
//   required: false,
//   index: {unique: false},
//   minlength: 3
// }


internApplicationSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Interns', internApplicationSchema);
