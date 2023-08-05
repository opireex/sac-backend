import { Router } from 'express';
import OrigemController from '../controllers/OrigemController.js';

class OrigemRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/Origem', OrigemController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/Origem', OrigemController.readAll);
    // One
    this.router.get('/Origem/:id', OrigemController.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/Origem/:id', OrigemController.update);
  }
  //DELETE
  delete() {
    this.router.delete('/Origem/:id', OrigemController.delete);
  }
}

export default new OrigemRouter().router;
