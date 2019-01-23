//


const Book = require('../models/bookSchema.js');

// Create and Save a new Note
exports.insertBuku = (req, res) => {

  if(!req.body.isbn) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  }
    // Create a Note
   const book = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        descAuthor: req.body.descAuthor,
        publisher: req.body.publisher,
        priceUS: req.body.priceUS,
        priceIDR: req.body.priceIDR
    });

    // Save Note in the database
    book.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

};


// Find a single note with a noteId
exports.cariSatu = (req, res) => {
    Book.findById(req.params.bookid)
    .then(buku => {
        if(!buku) {
            return res.status(404).send({
                message: "id " + req.params.bookid+" gak ketemu"
            });
        }
        res.send(buku);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.bukuid
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.bukuid
        });
    });
};


exports.tampilDetail=(req, res)=>{
  var judul = req.param('title');
  var author = req.param('author');
  if(judul==null && author==null && req.param('sort')==null){
    Book.find()
    .then(bukus=>{
      res.send(bukus)
      }).catch(err=>{
        res.status(500).send({
            message: err.message || "Sial eror"
        });
      });
    }
  else if(judul!=null){
    Book.findOne({"title":req.param('title')},  function(err, buku){

      res.send(buku);
    });
  }
  else if(author!=null){
    Book.findOne({"author":req.param('author')},  function(err, buku){
      res.send(buku);
    });
  }
  else if(req.param('sort')!=null){
    if (req.param('sort')=="price_low"){
      Book.find({}).sort({priceIDR: 'asc'}).exec(function(err, buku){
        res.send(buku);
      });

    }
    else if(req.param('sort')=="price_high"){
      Book.find({}).sort({priceIDR: 'desc'}).exec(function(err, buku){
        res.send(buku);
      });
    }
  }

};


exports.kalistaTest=(req, res)=>{
  res.send("Anjir");
}

exports.cariJudul = (req, res)=>{

};
