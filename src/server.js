const cors = require('cors');
const path = require('path');
const message = require('./json.js');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.sendFile(path.resolve('./public/index.html'));
});

app.get('/server', (req, res) => {
  const messageJson = message.getMessage();

  return res.json(messageJson);
});

const port = process.env.PORT || 3000;
app.listen(port);
