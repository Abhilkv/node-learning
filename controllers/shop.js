const Product = require('../models/product');
const Cart = require('../mo')
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const id = req.params.productId;     //   dynamic param 
  console.log(id);
  Product.findById(id, product => {
    console.log(product)
  })
  res.redirect('/')

};

exports.getProductQuery = (req, res, next) => {
  const id = req.query.productId;     //   dynamic param 
  console.log(id);
  Product.findById(id, product => {
    console.log(product)
  })
  res.redirect('/')

};

exports.postCart = (req, res, next) => {
  const id = req.body.productId;
  console.log(id);
  Product.findById(id, (product) => {
    Cart.addProduct(id, product.price)
  })
  res.redirect('/')

};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
