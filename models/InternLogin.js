const mongoose = require('mongoose');

const { Schema } = mongoose;

const internLoginSchema = Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('InternLogin', internLoginSchema);
