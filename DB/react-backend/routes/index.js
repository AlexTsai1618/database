var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: '405410928', name: '蔡亞霖',school:"TKU" });
});

module.exports = router;
