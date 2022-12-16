const path = require('path')

const Product = require('../models/product');


exports.showAddProduct = (req, res, next) => {
     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
}

const products = ["Test"];

exports.addAproducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}