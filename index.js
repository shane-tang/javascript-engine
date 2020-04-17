const express = require('express')
const app = new express();
const path = require('path');
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT);
console.log("listening on port " + PORT);