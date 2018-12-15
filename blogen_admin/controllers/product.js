const Product = require('../models/product');


// READ

exports.getProducts = (req,res,next) => {
  Product.fetchAll()
  .then(([rows])=>{
    res.render('products', { 
        title: 'Product List', 
        data: rows
    }); 
  })
  .catch(err => console.log(err));
};
exports.getDeleteById=(req,res,next) => {
    Products.getDeleteById(req.query.id)
    .then(()=>{
       res.redirect('/products');
    })
    .catch(err => console.log(err));
};
exports.getadd=(req,res,next) => {
    Products.getadd(req.query.name,req.query.price)
    .then(()=>{
        res.render('productAdd', { title: 'Add Product', msg: '' });
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
     })
    .catch(err =>console.log(err));
};

exports.getupdateById=(req,res,next) => {
    Products.getupdateById(req.body.id,req.body.name,req.body.price)
    .then(()=>{
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
    })
    .catch(err => console.log(err));
};