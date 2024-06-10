const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateProfile = async (req, res) => {
  const { profile } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profile },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updatePrivacySettings = async (req, res) => {
  const { privacySettings } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { privacySettings },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
