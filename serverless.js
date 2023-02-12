const serverless = require('serverless-http');
const { expressApp } = require('./config/main');

const app = expressApp();

// path must route to lambda
app.use('/.netlify/functions/server', app);

// export handler function which is our app wrapped in the serverless package
module.exports.handler = serverless(app);
