const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://mepelboim:mic136@books.wvy7jms.mongodb.net/?retryWrites=true&w=majority'
);

mongoose.connection.once('open', () => {
  console.log('connected to the DB');
});
