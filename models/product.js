const fs = require('fs');
const path = require('path');

const Cart = require('./cart');
const db = require('../util/database');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price, category) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.category = category
  }

  save() {
    return db.execute('INSERT INTO products (title, price, description, imageUrl, category) VALUES(?, ?, ?, ?, ?)',
     [this.title, this.price, this.description, this.imageUrl, this.category || ''])
  }

  static deleteById(id) {
     db.execute(`DELETE FROM products WHERE id=${id}`)
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {
    return db.execute(`SELECT * FROM products WHERE id=${id}`).then(data => data[0])
  }
};
