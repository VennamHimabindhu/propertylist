const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Apply CORS first with explicit config
app.use(cors({
  origin: "*", // allow any frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));

// ✅ Handle preflight requests (important for Render)
app.options('*', cors());

// ✅ Parse JSON
app.use(express.json());

// ✅ Helmet AFTER cors()
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
