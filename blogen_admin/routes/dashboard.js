var express = require('express');
var router = express.Router();

const dashboardController = require('../controllers/dashboard');

router.get('/', dashboardController.getDashboards);

module.exports =router;