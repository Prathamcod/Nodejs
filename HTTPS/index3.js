// Server Log 
const http = require('http')

const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const logServer = `${Date.now()} : New Request receive\n`;
    fs.appendFile("sample.txt", logServer, (err, data) => {
        switch (req.url) {
            case '/': res.end("HOME PAGE");
                break
            case '/about': res.end("I am pratham suthar");
                break
            default:
                res.end("404 PAGE")
        }
    })

})

myServer.listen(8000, () => console.log("Server Started!!!!"))