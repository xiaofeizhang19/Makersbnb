var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('menu.html');
});

router.post('/', function(req, res) {
  console.log('router');
  console.log(req.body);
  res.send("success");
});

module.exports = router;
