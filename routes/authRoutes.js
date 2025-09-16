const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // ✅ Accept any email and password
  if (email && password) {
    return res.json({
      message: 'Login successful',
      token: 'dummy-jwt-token', // token can stay the same for testing
    });
  }

  return res.status(400).json({ error: 'Email and password required' });
});

module.exports = router;
