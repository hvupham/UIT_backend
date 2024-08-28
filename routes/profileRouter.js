const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/profile/edit', profileController.edit);
module.exports = router;
