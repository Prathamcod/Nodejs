// Server Log 
const http = require('http')

const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const logServer = `${Date.now()} : ${req.url} New Request receive\n`;
    fs.appendFile("sample.txt", logServer, (err, data) => {
        res.end('Hello from the Server Again')
    })

})

myServer.listen(8000, () => console.log("Server Started!!!!"))