const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  res.send(`<h1>Thanks ${username}, we will send updates to ${email}</h1>`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
