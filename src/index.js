// content of index.js
const express = require('express');

const app = new express();



app.get('/', function(req, res) {
    res.send('Hello World!')
}) 

app.listen(3000,()=> {
  console.log('Listen on port 3000');
})