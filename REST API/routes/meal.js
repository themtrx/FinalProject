const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.meal.get.published);

router.get('/unpublished', auth(), controllers.meal.get.getUnpublished);

router.post('/', auth(), controllers.meal.post);

router.put('/:id', auth(), controllers.meal.put);

router.delete('/:id', auth(), controllers.meal.delete);

module.exports = router;