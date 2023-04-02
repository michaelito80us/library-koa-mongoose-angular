const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: String,
    summary: String,
  },
  { timestamps: true }
);

const Book = model('Book', bookSchema);

module.exports = Book;
