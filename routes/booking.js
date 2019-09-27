const booking = require('../data/booking');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('menu.html');
});

router.post('/', function(req, res) {
  console.log(req.body);
  booking.create(req.body, res);
  res.send("success");
});

module.exports = router;
