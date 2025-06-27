const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Import your local JSON file
const mandiData = require('./mandi-data.json');

app.use(cors());

// Basic root endpoint
app.get("/", (req, res) => {
  res.send("🌾 Welcome to the KrishiNect Mandi API!");
});

// ✅ API route to return mandi prices
app.get("/api/mandi-prices", (req, res) => {
  res.json(mandiData);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
