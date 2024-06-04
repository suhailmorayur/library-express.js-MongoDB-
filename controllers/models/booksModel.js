const mongoose = require('mongoose');


const booksSchema = new mongoose.Schema({
    title: String,
    publication_year:Number,
    author:String,
    genre:String,
    summery:String,
    cover_image:String,
    price:Number
  });

  const Books = mongoose.model('Books', booksSchema);
  module.exports = Books