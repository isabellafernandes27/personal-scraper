const express = require('express');
const app = express();
const cors = require('cors');
const Nightmare = require('nightmare');

const port = 3000;

app.use(cors());

// first endpoint - already built
app.get('/', (req, res) => {
  res.send("This is my personal web scraper!");
});

// scraper endpoint


app.listen(port, () => {
  console.log(`app running on ${port}`);
});
