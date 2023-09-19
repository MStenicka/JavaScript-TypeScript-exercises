import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('../frontend/index.html'));
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.redirect('/login-successful');
});

router.get('/login-successful', (req, res) => {
  console.log('You are successful logged in.');
  res.sendFile(path.resolve('../frontend/login-successful.html'));
});

export { router };
