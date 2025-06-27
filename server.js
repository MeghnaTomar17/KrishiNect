const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const mandiData = require('.mandi-data.json');

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the KrishiNect Mandi API!");
   res.json([
    { crop: "Wheat", price: "₹2200/quintal", mandi: "Meerut" },
    { crop: "Rice", price: "₹1800/quintal", mandi: "Patna" }
  ]);
});


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
