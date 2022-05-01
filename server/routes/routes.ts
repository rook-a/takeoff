import { Application } from 'express-serve-static-core';
import initOrdersRouter from './orders/orders';

const routeInits = [initOrdersRouter];

const initCustomRoutes = (server: Application) => {
  routeInits.forEach((routeInit) => routeInit(server));
};

export default initCustomRoutes;
