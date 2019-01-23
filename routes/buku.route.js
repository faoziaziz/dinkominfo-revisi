module.exports = (app) => {
    const buku = require('../api/kontroller/bukuKontroller.js');

    // Bikin buku baru
    app.post('/books', buku.insertBuku);
    // tampil semua bukunya
    app.get('/books', buku.tampilDetail);
    // cari 1 buku berdasar idnya
    app.get('/', function(req, res){
      res.json({
        "anjir":"banget"
      });
    })
    app.get('/books/:bookid', buku.cariSatu);
    app.get('/masukan', function(req, res){
      res.render('formbuku', {
        judul: "Masukkin Bang"
      });
    });

    app.get('/kalista', buku.kalistaTest);
}
