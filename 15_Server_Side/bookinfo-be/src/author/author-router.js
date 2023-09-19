var express = require('express');

var authorController = require('./author-controller.js');

const authorRouter = express.Router();

authorRouter.get('/all', authorController.getAll);
authorRouter.post('/', authorController.create);

module.exports = authorRouter;
