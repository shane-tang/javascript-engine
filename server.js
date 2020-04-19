const express = require('express');
const app = new express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(__dirname + '/dist/'));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(PORT);
console.log("listening on port " + PORT);