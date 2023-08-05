import { Router } from 'express';
import TpReclamacaoController from '../controllers/TpReclamacaoController.js';

class TpReclamacaoRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/TpReclamacao', TpReclamacaoController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/TpReclamacao', TpReclamacaoController.readAll);
    // One
    this.router.get('/TpReclamacao/:id', TpReclamacaoController.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/TpReclamacao/:id', TpReclamacaoController.update);
  }
  //DELETE
  delete() {
    this.router.delete('/TpReclamacao/:id', TpReclamacaoController.delete);
  }
}

export default new TpReclamacaoRouter().router;
