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

function getChat(req, res) {
  var chatID = parseInt(req.params.chatID);
  if (isNaN(chatID)) {
    throw new Error('Please pass valid number as chat ID');
  }
  var chat = chats[chatID];
  if (!chat) {
    res.status(404).send('404: no such chat!');
  }
  return chat;
}

router.get('/:chatID', function(req, res, next) {
  var chat = getChat(req, res);
  res.send(chat);
});

router.get('/:chatID/messages', function(req, res, next) {
  var chat = getChat(req, res);
  res.send(chat.messages);
});

router.post('/:chatID/messages', function(req, res, next) {
  var chat = getChat(req, res);
  var message = req.body.text;
  if(!message) {
    throw new Error('Need text');
  }
  chat.messages.push(message);
  res.send(message);
});

module.exports = router;
