const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(`req received`)
    const url = (req.url)
    res.setHeader('Content-Type', 'text/html')
    if (url === '/') {
        res.write(`<html><title>Test App</title><body></body></html>`)
        res.write(`<h1><form action="/message" method="POST"> <input type="text" name="message"/> <Button type="submit">SEND</button></form></h1>`)
    }
    if (url === '/message' && req.method === 'POST') {
        const body = [];
        let message = '';
        req.on('data', (chunk) => {     // new data event is triggered when ever a new chunk is read / recived
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {           // triggered when all chunks were read
            const parsedBody = Buffer.concat(body).toString();
             message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message)        // here we block the execution since its sync operation, next line only once its finished
        } )
        fs.writeFileSync('message.txt', 'DUMMY')
        res.statusCode = 404;
        res.write(`<h2>Test</h2>`)
    }
    res.end()

});

server.listen(8081, () => console.log('listening at 8081'));
