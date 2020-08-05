const env = process.env.NODE_ENV || 'development';
const config = {
    development: {
        port: process.env.DB_PORT,
        dbURL: process.env.DB_HOST,
        authCookieName: 'x-auth-token'
    },
    production: {}
};
module.exports = config[env];