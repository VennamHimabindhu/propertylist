const express = require('express');
const router = express.Router();
const {
  createProperty,
  getProperties,
  getPropertyById,
} = require('../controllers/propertyController');

// Remove the protect middleware completely
router.route('/')
  .get(getProperties)
  .post(createProperty); // 🔓 public now

router.route('/:id').get(getPropertyById);

module.exports = router;
