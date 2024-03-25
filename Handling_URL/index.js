// Server Log 
const http = require('http')

const fs = require('fs');

const url = require('url')

const myServer = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") return res.end();

    const logServer = `${Date.now()} :${req.url} New Request receive\n`;

    const myURL = url.parse(req.url, true);

    console.log(myURL);

    fs.appendFile("sample.txt", logServer, (err, data) => {
        switch (myURL.pathname) {
            case '/': res.end("HOME PAGE");
                break
            case '/about':
                const username = myURL.query.myname;
                res.end(`hello ${username}`);
                break

            case '/content':
                const mysearch = myURL.query.search_query;
                res.end("You search the result for " + mysearch);
                break

            default:
                res.end("404 PAGE")
        }
    })

})

myServer.listen(8000, () => console.log("Server Started!!!!"))