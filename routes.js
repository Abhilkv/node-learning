
const fs = require('fs')

const requestHandler = (req, res) => {
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
        req.on('data', (chunk) => {    
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {          
            const parsedBody = Buffer.concat(body).toString();
             message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message)      
        } )       
                                   
    }
    res.statusCode = 200;
    res.write(`<h2>Test</h2>`) 
    res.end()
}

module.exports = requestHandler;

// module.exports = { handler: requestHandler, message: 'Test message'};     2nd methode of export and import of module