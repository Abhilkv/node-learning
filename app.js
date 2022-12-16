const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');



const app = express();
app.engine('pug', require('pug').__express)

app.set('views', path.join(__dirname, 'views'));    // setting the folder name which contains html templates
 app.set('view engine', 'pug');                     // setting the template engine as pug                 

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(express.static(path.join(__dirname, 'public')))   // to set the default path for the  styles / any file access 
                                                          // so styles href link will become D:/learning/node_learning/public/css/main.css

app.use('/admin', adminRoutes.routes)              // selects the adminRouter if path matches /admin
app.use('/shop', shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))   // using a file  in the code base
})                                                                         // here _dirname refers to the node-learning folder

// app.use(errorController.get404);


// app.setHeader().status().use((req, res, next) => {
//     res.send('<h1>Page not found</h1>')
// })




app.listen(8081, () => console.log('listening at 8081'))    // it internally creates server and listen to the port like in normal node

