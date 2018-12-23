const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hey, I\'m a Node.js app and this is a demo!')
})

app.listen(3000, () => {
  console.log('Server is up on 3000');
})