const express = require('express');
const router = express.Router();
const {
  createProperty,
  getProperties,
  getPropertyById,
} = require('../controllers/propertyController');
// const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getProperties)
  .post(createProperty); // 🔓 now public (no token)

router.route('/:id').get(getPropertyById);

module.exports = router;
