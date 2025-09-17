const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ✅ Allow any frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


// ✅ Allow ALL origins (any frontend can call your API)
app.use(cors());

// ✅ Parse JSON before routes
app.use(express.json());

// ✅ Helmet AFTER cors(), with safe config
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
