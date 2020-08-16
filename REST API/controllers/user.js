const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');


module.exports = {
    get: {
        currentUser: (req, res, next) => {
            const id = req.params.id;
            models.User.findById(id).populate('meals').lean()
                .then((user) => {
                    res.send(user)
                })
                .catch(next)
            }
    },
    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            
            models.User.create({ username, password })
                .then((createdUser) =>{
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.header('Authorization', token).send(createdUser);
                })
                .catch((err) => {
                    res.send(err)
                })
        },

        verifyUser: (req, res, next) => {
            const token = req.body.token || '';

            Promise.all([
                utils.jwt.verifyToken(token),
                models.TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                    models.User.findById(data.id)
                        .then((user) => {
                            res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send(false)
                })
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header('Authorization', token).send(user);
                })
                .catch((err) => res.send(err));
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { avatar } = req.body;
        models.User.update({ _id: id }, { avatar })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};