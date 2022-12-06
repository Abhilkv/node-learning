const express = require('express');
const router = express.Router()

const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // res.send({ name: 'abhil'})
})





module.exports = router;