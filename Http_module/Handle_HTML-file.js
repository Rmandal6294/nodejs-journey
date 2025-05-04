import http from 'http'
import fs from 'fs'

const PORT = 3000;

const server = http.createServer((req, res)=>{

    const url = req.url;

    res.setHeader('Content-type', 'text/html');

    if (url === '/') {
        fs.readFile('./index.html', (err, data) => {

            if(err){
                res.statusCode = 500;
                res.end("Error loading File!");
            } else {
                res.write(data);
                res.end();
            }
        });
    } 

});

server.listen(PORT, ()=>{

    console.log(`Server running at http://localhost:${PORT}`);

});