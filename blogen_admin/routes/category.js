var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/category');

router.get('/category', categoryController.getCategorys);

module.exports =router;