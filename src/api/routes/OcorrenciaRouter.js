import { Router } from 'express';
import OcorrenciaController from '../controllers/OcorrenciaController.js';

class OcorrenciaRouter {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/Ocorrencia', OcorrenciaController.create);
  }
  //READ
  read() {
    // All
    this.router.get('/Ocorrencia', OcorrenciaController.readAll);
    // One
    this.router.get('/Ocorrencia/:id', OcorrenciaController.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/Ocorrencia/:id', OcorrenciaController.update);
  }
  //DELETE
  delete() {
    this.router.delete('/Ocorrencia/:id', OcorrenciaController.delete);
  }
}

export default new OcorrenciaRouter().router;
