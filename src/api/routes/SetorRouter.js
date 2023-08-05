import { Router } from 'express';
import SetorController from '../controllers/SetorController.js';

class SetorRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/Setor', SetorController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/Setor', SetorController.readAll);
    // One
    this.router.get('/Setor/:id', SetorController.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/Setor/:id', SetorController.update);
  }
  //DELETE
  delete() {
    this.router.delete('/Setor/:id', SetorController.delete);
  }
}

export default new SetorRouter().router;
