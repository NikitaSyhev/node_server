const express = require('express');
const router = express.Router();
const webController = require('../controllers/web.controller');

router.get('/', webController.getProducts)


module.exports = router;