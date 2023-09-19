import express from 'express';
import path from 'path';
import { router } from '../routes/index.js';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
