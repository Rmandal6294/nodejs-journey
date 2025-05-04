import http from 'http'

const port = 3000;

http.createServer((req, res) => {
    res.write('HELLO FROM NODE.JS \n -> Check console for request details.');
    
    console.log(`Requested url:-> ${req.url}`);
    console.log(`Requested method:-> ${req.method}`);
    console.log(req.headers);
    
    res.end();
}).listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});