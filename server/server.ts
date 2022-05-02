import jsonServer from 'json-server';
import db from './db.json';

const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);

server.listen(PORT, () => {
  console.log('JSON Server is running');
});
