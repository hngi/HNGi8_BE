const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['superAdmin', 'admin'],
    default: 'admin'
  }
}, {
  timestamps: true
});

adminSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Admins', adminSchema);
