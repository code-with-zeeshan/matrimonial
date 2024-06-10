const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: mongoose.Schema.Types.Mixed, // Can be refined based on profile structure
    default: {},
  },
  privacySettings: {
    type: mongoose.Schema.Types.Mixed, // Can be refined based on settings structure
    default: {},
  },
});

module.exports = mongoose.model('User', UserSchema);
