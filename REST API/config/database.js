require('dotenv').config()
const mongoose = require('mongoose');
const dbUrl = require('./config').dbURL


module.exports = () => {

    return mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        },
        console.log('Let\'s get the party started')
        );
};