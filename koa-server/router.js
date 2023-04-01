let Router = require('koa-better-router');
let router = Router().loadMethods();

const booksController = require('./controllers/booksController');

// Routes:
// getAllBooks
// /books
router.get('/books', booksController.getAllBooks);

// getOneBook
// /books/:bookId
router.get('/books/:bookId', booksController.getOneBook);

// addOneBook
// /books
router.post('/books', booksController.addOneBook);

// updateOneBook
// /books/:bookId
router.put('/books/:bookId', booksController.updateOneBook);

// deleteOneBook
// /books/:bookId
router.del('/books/:bookId', booksController.deleteOneBook);

module.exports = router;
