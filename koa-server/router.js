let Router = require('koa-better-router');
let router = Router().loadMethods();

const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');

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

// getBooksByAuthor
// books/?author=:authorName
// router.get('/books/', );

// router.get('/', (ctx, next) => {
//   ctx.body = `Hello world! Prefix: ${ctx.route.prefix}`;
//   return next();
// });

module.exports = router;
