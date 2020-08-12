const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.meal.get.published);

router.get('/unpublished', controllers.meal.get.getUnpublished); // implement auth() for user check

router.post('/', auth(), controllers.meal.post);

router.put('/:id', auth(), controllers.meal.put);

router.delete('/:id', auth(), controllers.meal.delete);

module.exports = router;