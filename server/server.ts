import jsonServer from 'json-server';
import initDatabase from './database/database';
import initCustomRoutes from './routes/routes';

const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router(initDatabase());
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

initCustomRoutes(server);

server.use(router);

server.listen(PORT, () => {
  console.log('JSON Server is running');
});
