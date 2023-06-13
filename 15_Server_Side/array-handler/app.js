import express from 'express';

const app = express();

app.use(express.json());

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;

  if (!what || !numbers) {
    return res
      .status(400)
      .json({ error: 'Please provide what to do with the numbers!' });
  }

  let result;
  if (what === 'sum') {
    result = numbers.reduce((sum, number) => sum + number, 0);
  } else if (what === 'multiply') {
    result = numbers.reduce((accumulator, number) => accumulator * number, 1);
  } else if (what === 'double') {
    result = numbers.map((number) => number * 2);
  } else {
    return res.status(400).json({ error: 'Invalid value for "what"' });
  }

  res.json({ result });
});

app.listen(3000, () => console.log('Listening on port 3000'));
