const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }

    static addProduct(id, productPrice) {
        fs.readFileSync(p, err, fileConstant => {
            let cart = { products: [], totalPrice: 0 };
            if(!err) {
                cart = JSON.parse(fileConstant);
            }
            const existingProduct = cart.products.find(prods => prods.id === id)
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct }
                updatedProduct.qty = updatedProduct.qty + 1;
            } else {
                updatedProduct = { id: id, qty: 1 }
            }

            cart.totalPrice += productPrice; 
            cart.products = [...cart.products, updatedProduct]
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err)
            })
        })
    }
}