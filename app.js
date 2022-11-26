const http = require('http');
const Routes = require('./routes')

const server = http.createServer(Routes);
// const server = http.createServer(Routes.handler); 2nd methode of export and import of module

server.listen(8081, () => console.log('listening at 8081'));
