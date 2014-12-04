'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  body: String,
  user_id: Schema.ObjectId
});

module.exports = mongoose.model('Article', ArticleSchema);