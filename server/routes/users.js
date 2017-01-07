var express = require('express');
var router = express.Router();

var users = ['admin'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(users));
});

/* POST a new user. */
router.post('/', function(req, res, next) {
  var user = req.body.name;
  if (!user) {
    throw new Error('name please');
  } else {
    users.push(user);
    res.send(JSON.stringify(users));
  }
});

module.exports = router;
