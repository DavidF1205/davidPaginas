const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  console.log(`Received email: ${email}`);
  
  // Append email to a file
  fs.appendFile('emails.txt', `${email}\n`, (err) => {
    if (err) {
      console.error('Failed to save email:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Thank you for subscribing!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});