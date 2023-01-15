const path = require('path');

const express = require('express');

const adminController = require('../controllers/dummy');

const router = express.Router();


// /admin/add-product => GET
router.get('/country', adminController.getDetails);

module.exports = router;
