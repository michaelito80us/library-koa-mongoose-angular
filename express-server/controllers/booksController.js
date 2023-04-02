const Book = require('./../models/bookmodel');

const list = async (_, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const add = async (req, res) => {
  const body = req.body;
  try {
    const book = await Book.create({
      title: body.title,
      author: body.author,
      summary: body.summary,
    });
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const view = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Book.findByIdAndUpdate(id, {
      title: body.title,
      author: body.author,
      summary: body.summary,
    });
    const book = await Book.findById(id);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const del = async (req, res) => {
  const id = req.params.id;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).send({ message: 'Book Deleted' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { list, add, view, update, del };
