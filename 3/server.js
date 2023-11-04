const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    console.log(req.method, req.url)
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('views/index.html', (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        }
        else{
            // res.write(data);
            // res.end();
            res.end(data);
        }
    });
    
});

server.listen(3000, 'localhost', (err, res) => {
    console.log("listening on port 3000");   
});

