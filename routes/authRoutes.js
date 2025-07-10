const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === '123456') {
    return res.json({
      message: 'Login successful',
      token: 'dummy-jwt-token',
    });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
