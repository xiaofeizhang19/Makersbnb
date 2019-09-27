const users = require('../data/users');
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  await users.createAsync(req.body, res);
});

router.post('/login', async (req, res) => {
  await users.login(req.body, res);
  console.log(res);
});

module.exports = router;
