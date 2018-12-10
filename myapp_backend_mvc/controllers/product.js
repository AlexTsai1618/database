const Product = require('../models/product');

/*  CREATE  **************************/

exports.getAddProduct = (req, res, next) => {
  res.render('productAdd', {
    title: 'Product Add', 
    msg: ''
  });
};

exports.postAddProduct = (req, res, next) => {
  Product.add(req, res)
    .then(([rows, fieldData]) => {
      res.redirect('/products');
    })
    .catch(err => console.log(err));
};

/* READ *****************************/

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      //console.log(rows, fieldData);
      res.render('products', {
        data: rows,
        title: 'Product List',
        //path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getFindById = (req, res, next) => {
   Product.findById(req.query.id)
   .then(([rows]) => {
     res.render('productsSearch', { 
       title: 'Product Search', 
       data: rows });
   })
   .catch(err => console.log(err));
};

/* UPDATE ***************************/
exports.getEditById = (req, res, next) => {
   const id = req.query.id;
   Product.findById(id)
   .then(([rows]) => {
      res.render('productEdit', { 
        title: 'Product Edit', 
        data: rows });
   })
   .catch(err => console.log(err));
};

exports.postUpdateById = (req, res, next) => {
   Product.updateById(req, res)
   .then(() => {
     res.redirect('/products');
   })
   .catch(err => console.log(err));
};

/* DELETE ***************************/

exports.getDeleteById = (req, res, next) => {
   Product.deleteById(req.query.id)
   .then(() => {
    res.redirect('/products');
   })
   .catch(err => console.log(err));
};