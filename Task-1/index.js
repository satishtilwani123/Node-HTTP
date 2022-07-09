const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res, next) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to Server</h1></body></html>');
})

server.listen(port, hostname, () => {
    console.log(`Running Server - http://${hostname}:${port}`);
})