const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdminLoginSchema = Schema({
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

module.exports = mongoose.model('AdminLogin', AdminLoginSchema);
