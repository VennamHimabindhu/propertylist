// server.js
const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ CORS middleware (simple and guaranteed to work)
app.use(cors()); // allows all origins

// ✅ Parse JSON requests
app.use(express.json());

// ✅ Helmet for security
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

// ✅ Routes
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/users', require('./routes/authRoutes'));

// ✅ Health check
app.get("/", (req, res) => res.send("Backend running"));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
