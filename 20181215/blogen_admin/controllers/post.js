const Posts = require('../models/post');
const Category=require('../models/category')

/* READ *****************************/

exports.getPosts = (req, res, next) => {
    Posts.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            // res.send(JSON.stringify(rows));
            res.render('post', {
                data: rows,
                title: 'Product List',
            //     //path: '/products'
            });
        })
        .catch(err => console.log(err));
};
exports.getEditPost = async (req,res,next)=> {
    let post;
    let categories;

    const getCategories= await Category.fetchAll()
        .then(([rows])=> {
            categories=rows
        })
        .catch(err => console.log(err));
    
    const getPostById = await Posts.findById(req.query.id)
    .then( ([rows])=>   {
        post=rows;
    })
    .catch();
    
    res.render('details',{
        data:post,
        categories :categories,
        title:'Edit Post'
    });
}; 
exports.postUpdatePost =(req,res,next) => {
  Posts.up
};