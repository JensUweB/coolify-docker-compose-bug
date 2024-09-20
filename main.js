/**
 * Example node server from the Nodejs docs
 * @see https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
 */

const { createServer } = require('node:http');
const hostname = '0.0.0.0';
const port = 3000;
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
