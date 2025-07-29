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

app.use('/api/properties', require('./routes/propertyRoutes')); // ✅ Route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
