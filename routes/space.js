const space = require('../data/space');
var express = require('express');
var router = express.Router();

/* POST create space */
router.post('/', function(req, res, next) {
  console.log('space is my friend')
  space.create(req.body, res);
  res.send('respond with a resource');
});

/* GET create space */
router.get('/', function(req, res, next) {
  console.log('reading space table')
  space.read(req.body, res);
  console.log('space table read');
});

module.exports = router;