const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const mandiData = require('./mandi-data.json');

app.use(cors());

app.get('/api/mandi', (req, res) => {
  const { commodity, state, market } = req.query;
  const result = mandiData.filter(item =>
    (!commodity || item.commodity.toLowerCase() === commodity.toLowerCase()) &&
    (!state || item.state.toLowerCase() === state.toLowerCase()) &&
    (!market || item.market.toLowerCase() === market.toLowerCase())
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Mandi API listening at http://localhost:${port}`);
});
