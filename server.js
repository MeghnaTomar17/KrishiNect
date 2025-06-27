const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

const mandiData = require("./mandi-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the KrishiNect Mandi API!");
});

app.get("/mandi", (req, res) => {
  res.json(mandiData);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
