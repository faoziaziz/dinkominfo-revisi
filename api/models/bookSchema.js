var mongoose =require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  descAuthor: String,
  publisher: String,
  priceUS: String,
  priceIDR: Number
});

module.exports = mongoose.model('ListBuku', bookSchema);
