const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsController');

router.get('/fetch-items',itemsController.getAllItems );
router.post('/add-item',itemsController.addItem);
router.get('/fetch-category',itemsController.getItemByCategory);
router.get('/fetch-slug',itemsController.fetchSlug);
router.use('/user',require('./users/users'));

module.exports = router;