const path = require('path');

const express = require('express');

const crudController = require('../controllers/crud-product');

const router = express.Router();

router.get('/test', crudController.testResponse);

// /admin/add-product => GET
router.post('/add-product', crudController.addProduct);

// /admin/view-productss => GET
router.get('/view-products', crudController.getProducts);
router.get('/view-products/:productId', crudController.getProducts);

// /admin/edit-product => POST
router.put('/edit-product/:productId', crudController.putEditProduct);

// /admin/remove-product => POST
router.delete('/remove-product/:productId', crudController.deleteProduct);

module.exports = router;
