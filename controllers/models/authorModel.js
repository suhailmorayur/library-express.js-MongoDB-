const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    name: String,
    date_of_birth:Number,
    nationality:String,
    books:[String],
    photo:String
  });

  const Author = mongoose.model('Author', authorSchema);
  module.exports = Author