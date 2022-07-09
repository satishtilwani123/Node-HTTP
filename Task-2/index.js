const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res, next) => {
    console.log(req.method);

    if(req.method == "GET"){

        var FileURL = '';
        if(req.url == '/'){
            FileURL = '/index.html';
        } else {
            FileURL = req.url;
        }

        console.log(FileURL);

        var PathURL = path.resolve('public'+FileURL);
        const Ext = path.extname(PathURL);

        console.log(PathURL);
        console.log(Ext);
        
        if(Ext == '.html'){
            fs.access(PathURL, (err) => {
                if(err){
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end("File not Found!");
                }
                    
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(PathURL).pipe(res);
            })
        } else {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'text/plain');
            res.end("Only HTML extension is Supported!");
        }
    }
})

server.listen(port, hostname, () => {
    console.log(`Running Server - http://${hostname}:${port}`);
})