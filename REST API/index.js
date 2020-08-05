// const config = require('./config/config');
// const dbConnection = require('./config/database');

// const app = require('express')();

// dbConnection().then(() => {

//     require('./config/express')(app);

//     require('./config/routes')(app);

//     // app.use(function (err, req, res, next) {
//     //     console.error(err);
//     //     res.status(500).send(err.message);
//     //     console.log('*'.repeat(90))
//     // });

//     app.listen(config.port, console.log(`Listening on port ${config.port}!`))

// }).catch(console.error);

require('./config/database')().then(() => {
    const config = require('./config/config');
    const app = require('express')();
    const appString = `Server is ready, listening on port ${config.port}...`;
  
    require('./config/express')(app);
    require('./config/routes')(app);
  
    
  
    app.listen(config.port, console.log(appString));
}).catch((error) => console.log(error))