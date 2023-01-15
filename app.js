const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const dummyRoutes = require('./routes/dummy');
const adminRoutes = require('./routes/admin');
const crudRoutes = require('./routes/crud-product');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use('/odata', dummyRoutes);
app.use('/admin', adminRoutes);
app.use('/crud', crudRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })   // defines the relaTION WITH PRODUCT AND USER MODELS
User.hasMany(Product)

sequelize
.sync({ force: true })   // will over write the existing data => will create fresh table 
.then(result => console.log(result))
.catch(err => console.log(err));

app.listen(3000);
