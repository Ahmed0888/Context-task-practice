const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const upload = require('../utils/upload'); // Import the configured multer instance

// Create a new profile (C of CRUD)
// 'image' is the field name in the form
router.post('/', upload.single('image'), profileController.createProfile);

// Read all profiles (R of CRUD)
router.get('/', profileController.getProfiles);

// Read single profile by ID (R of CRUD)
router.get('/:id', profileController.getProfileById);

// Add routes for Update (PUT/PATCH) and Delete (DELETE) here

module.exports = router;
