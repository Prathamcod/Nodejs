// Server Log 
const http = require('http')

// const fs = require('fs');

// const url = require('url')

const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from the Home Page")
})

// app.get('/about', (req, res) => {
//     return res.send("Hello from the About");
// })

app.get('/about', (req, res) => {
    return res.send("Hello from aboout" + ' Hey ' + req.query.name);
})

app.listen(3000, () => console.log("Server Started!!!!"))