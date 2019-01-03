const moment = require('moment');

const Company = require('../models/company');
const Category = require('../models/category');

/* READ *****************************/

exports.getPosts = (req, res, next) => {
    Company.fetchAll()
        .then(([rows]) => {
            
            // console.log(JSON.stringify(rows, ["id", "title", "date"]));
            //res.send(JSON.stringify(rows));
            res.render('company', {
                data: rows,
                title: 'Singer List',
            });
        })
        .catch(err => console.log(err));
};

exports.getEditPost = async (req, res, next) => {

    let categories;
    let singer;

    const getCategories = await Category.fetchAll()
        .then(([rows]) => {
            categories = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findPostById = await Company.findById(req.query.singer_id)
        .then(([rows]) => {
            for (let p of rows) {
        //     p.date = moment(p.date).format('YYYY-MM-DD');
        //    console.log('p.date: ', p.date);
               }
             singer = rows;
            // console.log('post[0].date: ', post[0].date);
            // console.log('findPostById(): ', JSON.stringify(rows));
         })
        .catch(err => console.log(err));

    // console.log('post: ', JSON.stringify(post[0].date));
    
    res.render('details', {
        data: singer,
        title: 'Edit Post',
        categories: categories
   });

};

exports.postAddPost = (req, res, next) => {

    Company.add(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};



exports.postUpdatePost = (req, res, next) => {

    Company.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.getDeletePost = (req, res, next) => {
    Company.deleteById(req.query.singer_id)
        .then(([rows]) => {
            res.redirect('/company');
        })
        .catch();
};