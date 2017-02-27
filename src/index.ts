import * as Koa from 'koa';
import * as json from 'koa-json';
import * as logger from 'koa-logger';

const app = new Koa();

app.use(logger());
app.use(json());

app.use(async (ctx) => {
  ctx.body = {
    data: 'hello',
  };
});

app.listen(3000);
