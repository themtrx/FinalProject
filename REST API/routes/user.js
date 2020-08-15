const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.user.get);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.post('/verify', controllers.user.post.verifyUser)

router.put('/:id', controllers.user.put);

router.delete('/:id', controllers.user.delete);

module.exports = router;