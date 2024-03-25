// Server Log 
const http = require('http')

const fs = require('fs');

const url = require('url')

function myHandler(req, res) {

    if (req.url === "/favicon.ico") return res.end();

    const logServer = `${Date.now()} :${req.method} ${req.url} New Request receive\n`;

    const myURL = url.parse(req.url, true);

    console.log(myURL);

    fs.appendFile("sample.txt", logServer, (err, data) => {
        switch (myURL.pathname) {
            case '/':
                if (req.method === "GET") res.end("HOME PAGE");
                break
            case '/about':
                const username = myURL.query.myname;
                res.end(`hello ${username}`);
                break

            case '/content':
                const mysearch = myURL.query.search_query;
                res.end("You search the result for " + mysearch);
                break
            case "/signup":

                if (req.method === "GET") res.end("This is signup Form,")
                else if (req.method === "POST ") {
                    //  DB query 
                    res.end("sucess..............")
                }
            default:
                res.end("404 PAGE")
        }
    })
}
const myServer = http.createServer(myHandler);

myServer.listen(3000, () => console.log("Server Started!!!!"))