const express = require('express');
const app = express();
const port = 3000;

let orderUpdates = [];

app.use(express.json());
app.use(express.static('public'));

app.post('/webhook', (req, res) => {
  const update = {
    timestamp: new Date(),
    ...req.body
  };
  orderUpdates.unshift(update);
  console.log('Received update:', update);
  res.sendStatus(200);
});

app.get('/updates', (req, res) => {
  res.json(orderUpdates);
});

app.listen(port, () => {
  console.log(`Webhook server running at http://localhost:${port}`);
});
