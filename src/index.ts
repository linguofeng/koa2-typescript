import * as Koa from 'koa';
import * as logger from 'koa-logger';

const app = new Koa();

app.use(logger());

app.use(async (ctx) => {
  ctx.body = JSON.stringify({
    data: 'hello',
  });
});

app.listen(3000);
