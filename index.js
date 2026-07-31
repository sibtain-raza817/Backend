require('dotenv').config()

const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Hello Raza")
})

app.get('/login', (req, res) => {
    res.send("<h3>Login has beed successfully</h3>");
})

app.get('/twitter', (req, res) =>{
    res.send('<h1>Please Login First </h1>')
})
app.get('/youtube', (req, res) =>{
    res.send('<h2>RazaCodeX</h2>')
})
app.listen(process.env.PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
    
})