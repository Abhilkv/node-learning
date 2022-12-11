const express = require('express');
const router = express.Router()
const mainPath = require('../utils/path');

const path = require('path')

// reaches only on /admin/add-comment
router.get('/add-product', (req, res, next) => {

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

const products = [];


// reaches only on /admin/products    POST request
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({ title: req.body.title })
 
    res.send("<h1>New Products</h1>")

})

exports.products = products;
exports.routes = router;
// module.exports = router;