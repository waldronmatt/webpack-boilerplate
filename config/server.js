const express = require('express');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const paths = require('./paths');

const limiter = rateLimit({
  windowMs: 1 * 60 * 100, // 1 minute
  max: 200,
});

const app = express();
app.use(compression());
app.use(limiter);

// use express.static() to serve files from several directories
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(paths.INDEX_PAGE);
});

// 404 route (keep this as the last route)
app.get('*', (req, res) => {
  res.sendFile(paths.ERROR_PAGE);
});

app.listen(paths.PORT);
