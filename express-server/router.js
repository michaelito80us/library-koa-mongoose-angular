const express = require('express');
const router = express.Router();

const booksController = require('./controllers/booksController');

router.get('/books', booksController.list);
router.post('/books', booksController.add);
router.get('/books/:id', booksController.view);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.del);

module.exports = router;
