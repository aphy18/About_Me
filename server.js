const express = require('express');
const app = express();
const port = 8080;
const path = require('path')

app.set('view engine', 'ejs');

// console.log('dirname -->', __dirname) // the current path where server.js is
// console.log(path.resolve('views')) // gives the path of the selected foler / file


app.get('/home',(req,res) => {
    res.render("index", { text: 'hello world' })
})


app.listen(port)