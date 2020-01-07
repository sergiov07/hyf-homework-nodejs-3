// content of index.js
const express = require('express');
const app = new express();
let users = [];

app.get('/', function(req, res) {
    res.send('Hello World!')
}); 

app.get('/users', (req, res) => {  
  res.json(users)

});

app.get('/user/:id', (req, res) => {
  const user = users.find(user => user.id == req.params.id);
  res.json(user);
});

app.post('/user', (req, res) => {
  users.push({id:0})
  res.json(users);
});



app.listen(3000,()=> {
  console.log('Listen on port 3000');
})