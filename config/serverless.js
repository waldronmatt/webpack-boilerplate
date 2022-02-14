const express = require('express');
const serverless = require('serverless-http');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const paths = require('./paths');

// rate limit: max of 200 requests per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 100, // 1 minute
  max: 200,
});

// setup
const app = express();

// compress all responses
app.use(compression());

// apply rate limiter to all requests
app.use(limiter);

// use express.static() to serve files from several directories
app.use(express.static(__dirname));

// serve the index file
app.get('/', (req, res) => {
  res.sendFile(paths.INDEX_PAGE);
});

// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
  res.sendFile(paths.ERROR_PAGE);
});

// path must route to lambda
app.use('/.netlify/functions/server', app);

// export a handler function which is our app wrapped in the serverless package
module.exports.handler = serverless(app);
