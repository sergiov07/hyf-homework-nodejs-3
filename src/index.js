// content of index.js
const express = require('express');

const app = new express();

app.get('/', function(req, res) {
    res.send('Hello World!')
}) 

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(3000,()=> {
  console.log('Listen on port 3000');
})