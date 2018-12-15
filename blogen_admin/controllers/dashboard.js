
const Post = require('../models/post');
const Category = require('../models/category');
const User = require('../models/user');

exports.getDashboard = async(req, res, next) => {

    let posts;
    let postCounts;
    let categories;
    let categoryCount;
    let userCount;

    try {
        const getPosts = await Post.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D , YYYY');
                }
                posts = rows;
            })
        const getUsercount = await Post.getCount()
            .then(([rows]) => {
                userCount = rows[0].count;
                console.log('user count 1:', userCount);
            })
        const getCategory = await User.getCount()
            .then(([rows]) => {
                categoryCount = rows[0].count;
            })
        console.log('posts: ', posts);
        console.log('category 2: ', categories);
        console.log('post count: ', postCounts);
        console.log('category count: ', categoryCount);
        console.log('user count: ', userCount);
        }catch(err){
            console.log(err);
        };

    
    
};