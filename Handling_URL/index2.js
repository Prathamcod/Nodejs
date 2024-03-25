const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Extract various components of the URL
    const protocol = parsedUrl.protocol;
    const host = parsedUrl.host;
    const port = parsedUrl.port;
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    const querystring = parsedUrl.querystring;

    // Send the response
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Respond with parsed URL components
    res.write(`Protocol: ${protocol}\n`);
    res.write(`Host: ${host}\n`);
    res.write(`Port: ${port}\n`);
    res.write(`Pathname: ${pathname}\n`);
    res.write(`Query parameters: ${JSON.stringify(query)}\n`);
    res.write(`Querystring: ${querystring}\n`);

    // End the response
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
