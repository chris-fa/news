const Sequelize = require('sequelize');

const db = require('../db');

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
