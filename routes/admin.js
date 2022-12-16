const express = require('express');
const router = express.Router()
const mainPath = require('../utils/path');
const productsController = require('../controllers/product');

const path = require('path')




// reaches only on /admin/add-comment
router.get('/add-product', productsController.showAddProduct)

router.get('/add', (req, res ) => {
    console.log(path.join(__dirname, '', 'views', 'add-product.html'))
    res.send('<h1>Test</h1>')
})



// reaches only on /admin/products    POST request
router.post('/add-product', productsController.addAproducts)



exports.routes = router;
// module.exports = router;