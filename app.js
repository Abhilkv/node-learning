const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
});

server.listen(8081, () => console.log('listening at 8081'));
