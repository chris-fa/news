const express = require('express');

const Post = require('../models/Post');

const router = express.Router();

router.get('/', (req, res, next) => {
  Post.findAll({ order: [ ['updatedAt', 'DESC'] ] })
    .then(posts => res.json({ data: posts }))
    .catch(err => next(err));
});

module.exports = router;
