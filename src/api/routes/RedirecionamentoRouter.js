import { Router } from 'express';
import RedirecionamentoController from '../controllers/RedirecionamentoController.js';

class RedirecionamentoRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/Redirecionamento', RedirecionamentoController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/Redirecionamento', RedirecionamentoController.readAll);
    // One
    this.router.get(
      '/Redirecionamento/:id',
      RedirecionamentoController.readOne,
    );
  }
  //UPDATE
  update() {
    this.router.put('/Redirecionamento/:id', RedirecionamentoController.update);
  }
  //DELETE
  delete() {
    this.router.delete(
      '/Redirecionamento/:id',
      RedirecionamentoController.delete,
    );
  }
}

export default new RedirecionamentoRouter().router;
