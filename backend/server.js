const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('on home page')
    console.log('on home page')
})


app.listen(8080)