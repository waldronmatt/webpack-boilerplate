/* eslint-disable unicorn/prevent-abbreviations */
const express = require('express');
const paths = require('./paths');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(paths.INDEX_PAGE);
});

// 404 route (keep this as the last route)
router.get('*', (req, res) => {
  res.sendFile(paths.ERROR_PAGE);
});

module.exports = router;
