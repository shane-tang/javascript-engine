// const express = require('express');
// const app = new express();
// const path = require('path');

// app.use('/', express.static(__dirname));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// app.listen(PORT);
// console.log("listening on port " + PORT);

const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

fs.readFile('./dist/index.html', (err, html) => {
    http.createServer((req, res) => {
        res.write(html);
        res.end();
    }).listen(PORT);

    console.log("listening on port " + PORT);

});