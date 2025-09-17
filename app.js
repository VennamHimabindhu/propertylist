const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Dynamic CORS middleware to allow any frontend
app.use((req, res, next) => {
  const origin = req.headers.origin || "*";
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ✅ Parse JSON
app.use(express.json());

// ✅ Helmet AFTER CORS
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

// Routes
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/users', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
