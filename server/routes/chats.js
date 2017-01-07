var express = require('express');
var router = express.Router();

var chats = [];

router.get('/', function(req, res, next) {
  res.send(chats);
});

router.post('/', function(req, res, next) {
  var subject = req.body.subject;
  if (!subject) {
    throw new Error('subject please');
  } else {
    chat = {
      id: chats.length,
      subject: subject,
      messages: []
    };
    chats.push(chat);
    res.send(chat);
  }
});

module.exports = router;
