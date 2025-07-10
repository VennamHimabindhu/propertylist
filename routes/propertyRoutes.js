const express = require('express');
const router = express.Router();
const {
  createProperty,
  getProperties,
  getPropertyById,
} = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getProperties)
  .post(protect, createProperty); // ✅ protected

router.route('/:id').get(getPropertyById);

module.exports = router;
