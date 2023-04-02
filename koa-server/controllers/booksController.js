// will need to require all the mongoose files
const Book = require('./../models/bookModel');

exports.getAllBooks = async (ctx) => {
  const query = ctx.query.author;
  try {
    let books;
    if (!query) {
      books = await Book.find({});
    } else {
      books = await Book.find({ author: query });
    }
    ctx.status = 200;
    ctx.body = books;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
};

exports.getOneBook = async (ctx) => {
  const id = ctx.params.bookId;
  try {
    const book = await Book.findById(id);
    if (book) {
      ctx.status = 200;
      ctx.body = book;
    } else {
      ctx.status = 204;
      ctx.body = { message: 'book not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
};

exports.addOneBook = async (ctx) => {
  const bookToAdd = ctx.request.body;
  try {
    const newBook = await Book.create({
      title: bookToAdd.title,
      author: bookToAdd.author,
      summary: bookToAdd.summary,
    });
    ctx.status = 201;
    ctx.body = newBook;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
};

exports.updateOneBook = async (ctx) => {
  const id = ctx.params.bookId;
  const update = ctx.request.body;
  try {
    let book = await Book.findById(id);
    if (book) {
      book.title = update.title;
      book.author = update.author;
      book.summary = update.summary;

      book.save();

      ctx.status = 200;
      ctx.body = book;
    } else {
      ctx.status = 204;
      ctx.body = { message: 'book not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
};

exports.deleteOneBook = async (ctx) => {
  const id = ctx.params.bookId;
  try {
    await Book.findByIdAndDelete(id);
    ctx.status = 200;
    ctx.body = { message: 'Book Deleted' };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
};
