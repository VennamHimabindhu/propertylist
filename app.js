const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet'); // ✅ Add helmet
const connectDB = require('./config/db'); // ✅ correct path

dotenv.config(); // ✅ Load .env variables
connectDB(); // ✅ Call DB connect here

const app = express();
app.use(cors());
app.use(helmet()); // ✅ Use helmet before other middlewares
app.use(express.json());

// ✅ Existing property routes
app.use('/api/properties', require('./routes/propertyRoutes')); 

// ✅ Add auth/login route
app.use('/api/users', require('./routes/authRoutes')); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
