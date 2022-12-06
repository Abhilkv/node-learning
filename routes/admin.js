const express = require('express');
const router = express.Router()
const mainPath = require('../utils/path');

const path = require('path')

// reaches only on /admin/add-comment
router.get('/add-product', (req, res, next) => {

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})


// reaches only on /admin/products    POST request
router.post('/products', (req, res, next) => {
    console.log(req.body);
 
    res.send("<h1>New Products</h1>")

})

module.exports = router;