const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// POST /api/users/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  // create a JWT token
  const token = jwt.sign({ id: 'testuserId' }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.json({
    message: 'Login successful',
    token,
  });
});

module.exports = router;
