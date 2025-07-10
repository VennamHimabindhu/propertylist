const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('🔐 AUTH HEADER:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('🚫 No Bearer token found');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  console.log('📦 Extracted Token:', token);

  try {
    console.log('🔑 JWT_SECRET:', process.env.JWT_SECRET); // Check if .env loaded
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Decoded Token:', decoded);

    req.user = decoded.id;
    next();
  } catch (error) {
    console.error('❌ JWT Verification Error:', error.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { protect };
