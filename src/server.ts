import cors from 'cors';
import express from 'express';
import { getMessage } from './json';

const app = express();

app.use(cors());

app.get('/getmessage', (req, res) => {
  const messageJson: object = getMessage();

  return res.json(messageJson);
});

const port = process.env.PORT || 3000;
app.listen(port || 3000);
