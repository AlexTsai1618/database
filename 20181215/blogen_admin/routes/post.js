var express = require('express');
var router = express.Router();

const postController = require('../controllers/post');

router.get('/', postController.getPosts);
/* /post/edit */
router.get('/edit', postController.getEditPost);
router.post('/update');
module.exports = router;