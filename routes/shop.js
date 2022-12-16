const express = require('express');
const router = express.Router()
const adminRoutes = require('./admin');
const shopController = require('../controllers/shop');

const path = require('path')

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
//     // res.send({ name: 'abhil'})
// })


router.get('/', (req, res) => {
    res.render('shop', {docTitle: 'Abhil Shop', prods: adminRoutes.products, path: 'sample' })
})

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;