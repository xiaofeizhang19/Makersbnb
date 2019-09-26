const space = require('../data/space');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('space is my friend')
  space.create(req.body, res);
  res.send('respond with a resource');
});

module.exports = router;