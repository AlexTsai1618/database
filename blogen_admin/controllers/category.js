const Categorys = require('../models/category');
exports.getCategorys = (req, res, next) => {
    Posts.fetchAll()
      .then(([rows, fieldData]) => {
          console.log(rows, fieldData);
        // res.render('products', {
        //   data: rows,
        //   title: 'Product List',
          //path: '/products'
        })
       .catch(err => console.log(err));
  };