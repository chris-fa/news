const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    version: process.env.npm_package_version,
  });
});

module.exports = router;
