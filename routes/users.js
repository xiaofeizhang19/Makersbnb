const users = require('../data/users');
var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET users listing. */
// router.get('/:id', function(req, res, next) {
//   console.log(req.params.id, "Aaaaaaaaaaaaaa")
//   res.send('Get');
// });

/* CREATE user */
router.post('/', function(req, res) {
  users.create(req.body, res);
  res.send("You have signed up!")
});

router.post('/login', function(req, res) {
  console.log(req.body)
  users.login(req.body, res);
  res.send("logged in!")
});

module.exports = router;
