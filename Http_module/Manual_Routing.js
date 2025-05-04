import http from 'http'

const PORT = 3000;

const server = http.createServer((req, res)=>{

    const url = req.url;

    res.setHeader('Content-type', 'text/html');

    if (url === '/' || url === '/home') {
        res.write('<h1> Welcome to my Home page </h1> \n <h3> -> use for more : \n/about\t/contact</h3>');
    } else if (url === '/about') {
        res.write('<h1> About-> Page! \tI am Ranit Mandal </h1> \n -> <h3> I am a B.tech in CSE student loves with Web Development.</h3>');
    } else if (url === '/contact') {
        res.write("<h1>Contact Page!!</h1>\n<h2>-> ranit@example.com\n-> +91 1234543210</h2>");
    } else {
        res.statusCode = 404;
        res.write('<h1>404 - Page Not Found</h1>');
    }

    res.end();

});

server.listen(PORT, ()=>{

    console.log(`Server running at http://localhost:${PORT}`);

});

//! Then open your browser and go to:

//* http://localhost:3000/ → Home page

//* http://localhost:3000/about → About page

//* http://localhost:3000/contact → Contact page

//* http://localhost:3000/anything-else → 404 page