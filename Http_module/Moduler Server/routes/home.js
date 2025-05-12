import logger from '../utils/logger.js'

const homeRoute = (req, res) => {
    logger(req.method, req.url);

    if (req.url === "/") {
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Welcome to my Modular Node.js');
    } else {
        res.writeHead(404);
        res.end('404 Not Found!');
    }
}

export default homeRoute