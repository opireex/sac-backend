import { Router } from 'express';
import UnidadeController from '../controllers/UnidadeController.js';

class UnidadeRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/Unidade', UnidadeController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/Unidade', UnidadeController.readAll);
    // One
    this.router.get('/Unidade/:id', UnidadeController.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/Unidade/:id', UnidadeController.update);
  }
  //DELETE
  delete() {
    this.router.delete('/Unidade/:id', UnidadeController.delete);
  }
}

export default new UnidadeRouter().router;
