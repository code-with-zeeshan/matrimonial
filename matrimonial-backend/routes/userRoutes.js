const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, updatePrivacySettings } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.put('/privacy-settings', auth, updatePrivacySettings);

module.exports = router;
