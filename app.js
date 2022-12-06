const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(express.static(path.join(__dirname, 'public')))   // to set the path for the 

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



// app.setHeader().status().use((req, res, next) => {
//     res.send('<h1>Page not found</h1>')
// })




app.listen(8081, () => console.log('listening at 8081'))    // it internally creates server and listen to the port like in normal node

