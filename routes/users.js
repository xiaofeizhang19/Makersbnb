const users = require('../data/users');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id, "Aaaaaaaaaaaaaa")
  res.send('Get');
});

/* CREATE user */
router.post('/', function(req, res) {
  console.log('router');
  console.log(req.body)
  users.create(req.body, res);
  res.send("hello")
});

module.exports = router;
