require('./models/index');

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const port = 3001;
const router = require('./router');

app.use(bodyParser());
app.use(cors());
app.use(router.middleware());

// app.use(async (ctx) => {
//   ctx.body = 'Hello World';
// });

app.listen(port, () => {
  console.log('this app is listening on port ' + port);
});
