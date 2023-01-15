const Product = require('../models/product');
const fetch = require('cross-fetch')

exports.addProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const category = req.body.category;
  console.log('**************************************************************************************')
  console.log(JSON.stringify(req.body))
  Product.create({ 
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    category: category
  }).then(() => {
    console.log('data created to db');
    res.send('product added')
   }).catch((err) => {console.log('Error on creating data :' + err); res.send('Error on creating data :' + err)})

  // const product = new Product(null, title, imageUrl, description, price, category);
  // product.save()
  // .then(() => {
  //   res.redirect('/');
  // })
  // .catch(err => console.log(err));

};

exports.testResponse =  (req, res, next) => {
   fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => res.send(json))
}


exports.getProducts = (req, res, next) => {
  const id = req.params.productId;
  if (id) {
    Product.findByPk(id).then(products => {
      res.send(products)
    }).catch((err) => {
      res.status(404).send(err)
    }) ;
  }
  Product.findAll()
  .then(products => {
    res.send(products)
  }).catch((err) => {
    res.status(404).send(err)
  }) ;
};


exports.putEditProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.update(req.body, { where: { id: id }})
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Product was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error Product Product with id=" + id
    });
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.productId;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};
