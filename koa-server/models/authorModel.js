const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authorSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Author = model('Author', authorSchema);
