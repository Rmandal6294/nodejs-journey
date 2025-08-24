const express = require('express');
const router = express.Router();

// Sample messages array
const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Index route - display all messages
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Mini Messageboard', 
    messages: messages 
  });
});

// New message form route (GET)
router.get('/new', (req, res) => {
  res.render('form', { 
    title: 'New Message' 
  });
});

// Handle new message submission (POST)
router.post('/new', (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  
  // Generate a simple ID for the new message
  const newId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
  
  messages.push({ 
    id: newId,
    text: messageText, 
    user: messageUser, 
    added: new Date() 
  });
  
  res.redirect('/');
});

// Message details route
router.get('/message/:id', (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages.find(m => m.id === messageId);
  
  if (message) {
    res.render('message', { 
      title: 'Message Details', 
      message: message 
    });
  } else {
    res.status(404).render('error', { 
      title: 'Message Not Found',
      error: 'Message not found' 
    });
  }
});

module.exports = router;