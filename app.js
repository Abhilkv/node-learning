const express = require('express');
const bodyParser = require('body-bodyParser');

app.use(bodyParser.urlencoded({ extended: false })) 

const app = express();
app.use((req, res, next) => {
	console.log("first middleware");
    next();					// execution will move to next middleware only if there is this next 
                        // Command else it will stuck here
})

app.use('/products', (req, res, next) => {
    console.log("products middleware");
    res.redirect('/')       // to redirect to particular url
    res.send("<h1>New Products</h1>")

})

app.use('/', (req, res, next) => {
    console.log("2nd middleware");
    res.send("<h1>Home</h1>")
    // next();					// execution will move to next  handler only if there is this next 
                        //  Command else it will stuck here
})



app.listen(8081, () => console.log('listening at 8081'))    // it internally creates server and listen to the port like in normal node

