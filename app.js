var express = require('express');
var app = express();

//add something

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
