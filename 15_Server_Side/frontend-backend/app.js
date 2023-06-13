const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { json } = require('stream/consumers');

const PORT = 8080;
const app = express();

let jsonParser = bodyParser.json();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input !== undefined) {
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input) * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name === undefined && req.query.title === undefined) {
    res.statusCode = 400;
    res.json({
      error: 'Please provide a name and a title!',
    });
  } else if (req.query.name === undefined) {
    res.statusCode = 400;
    res.json({
      error: 'Please provide a name!',
    });
  } else if (req.query.title === undefined) {
    res.statusCode = 400;
    res.json({
      error: 'Please provide a title!',
    });
  } else {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable !== undefined) {
    res.json({
      appended: req.params.appendable + 'a',
    });
  } else {
    res.statusCode = 404;
  }
});

app.post('/dountil/:operation', jsonParser, function (req, res) {
  if (req.body.until === undefined) {
    console.log('No until');
    res.statusCode = 444;
    return res.json({
      error: 'Please provide a number!',
    });
  }
  console.log(req.body);

  if (req.params.operation !== undefined) {
    if (req.params.operation === 'sum') {
      console.log('Got sum');
      let sum = 0;
      for (let i = 1; i <= req.body.until; ++i) {
        sum += i;
      }
      return res.json({ result: sum });
    }
    if (req.params.operation === 'factor') {
      console.log('Got factorial');
      let fact = 1;
      for (let i = 1; i <= req.body.until; ++i) {
        fact *= i;
      }
      return res.json({ result: fact });
    }
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
