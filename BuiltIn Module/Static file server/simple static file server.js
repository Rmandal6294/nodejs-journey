import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

let __filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const server = http.createServer((req, res)=>{
    let parsedUrl = url.parse(req.url, true);
    let filePath = path.join(__dirname, 'public', parsedUrl.pathname);

    fs.readFile(filePath, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type' : "text/plain"});
            res.end('404 - File Not Found!');
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        }
    });
});

server.listen(3000, ()=>{
     console.log('Server running at http://localhost:3000');
     console.log("Go to : - http://localhost:3000/index.html");
     console.log("Go to : - http://localhost:3000/about.html");
});

