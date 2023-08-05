import { Router } from 'express';
import TpOcorrenciaController from '../controllers/TpOcorrenciaController.js';

class TpOcorrenciaRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/TpOcorrencia', TpOcorrenciaController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/TpOcorrencia', TpOcorrenciaController.readAll);
    // One
    this.router.get('/TpOcorrencia/:id', TpOcorrenciaController.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/TpOcorrencia/:id', TpOcorrenciaController.update);
  }
  //DELETE
  delete() {
    this.router.delete('/TpOcorrencia/:id', TpOcorrenciaController.delete);
  }
}

export default new TpOcorrenciaRouter().router;
