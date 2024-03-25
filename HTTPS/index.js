const http = require('http')

const myServer = http.createServer((req, res) => {
    // console.log("My Server is ready to browers");
    // console.log(req.headers);
    console.log(req);
    res.end('Hello from the Server Again')
})

myServer.listen(8000, () => console.log("Server Started"))