var express = require('express');
var apiRouter = require('./src/api-router.js');
const error_handler = require('./src/error_handler.js');
var errorHandler = require('./src/error_handler.js');

const app = express();

const port = 3000;

app.use(express.json());
app.use(apiRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running on the localhost: ${port}`);
});
