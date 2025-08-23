const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    // Set content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Handle different routes
    if (req.url === '/' || req.url === '/index.html') {
        serveFile('index.html', res);
    } else if (req.url === '/about' || req.url === '/About.html') {
        serveFile('About.html', res);
    } else if (req.url === '/contact-me' || req.url === '/contact-me.html') {
        serveFile('contact-me.html', res);
    } else {
        // Serve 404 page for any other route
        serveFile('404.html', res, 404);
    }
});

function serveFile(filename, res, statusCode = 200) {
    const filePath = path.join(__dirname, filename);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If file doesn't exist, serve 404 page
            if (err.code === 'ENOENT') {
                const notFoundPath = path.join(__dirname, '404.html');
                fs.readFile(notFoundPath, (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Server Error');
                    } else {
                        res.writeHead(404);
                        res.end(data);
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Server Error');
            }
        } else {
            res.writeHead(statusCode);
            res.end(data);
        }
    });
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Available routes:');
    console.log('  - http://localhost:8080/ (index.html)');
    console.log('  - http://localhost:8080/about (About.html)');
    console.log('  - http://localhost:8080/contact-me (contact-me.html)');
    console.log('  - Any other route will show 404.html');
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    process.exit(0);
});
