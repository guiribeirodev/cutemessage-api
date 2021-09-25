const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

app.get('/server', (req, res) => {
  return res.json({ message: 'hi baby' });
});

app.listen(port);
