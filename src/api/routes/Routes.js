import { Router } from 'express';
import UnidadeRouter from './UnidadeRouter.js';

class Routes {
  constructor() {
    this.router = new Router();
    this.baseRoute();
    this.initializeRoutes();
  }

  baseRoute() {
    this.router.get('/', (req, res) => res.send('Router configured...'));
  }

  initializeRoutes() {
    this.router.use(UnidadeRouter);
  }
}

export default new Routes().router;
