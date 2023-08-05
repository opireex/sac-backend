import { Router } from 'express';
import TpOcorrencia2Controller from '../controllers/TpOcorrencia2Controller.js';

class TpOcorrencia2Router {
  constructor() {
    this.router = new Router();
    this.create();
    this.read();
    this.update();
    this.delete();
  }

  //CREATE
  create() {
    this.router.post('/TpOcorrencia2', TpOcorrencia2Controller.create);
  }
  //READ
  read() {
    // All
    this.router.get('/TpOcorrencia2', TpOcorrencia2Controller.readAll);
    // One
    this.router.get('/TpOcorrencia2/:id', TpOcorrencia2Controller.readOne);
  }
  //UPDATE
  update() {
    this.router.put('/TpOcorrencia2/:id', TpOcorrencia2Controller.update);
  }
  //DELETE
  delete() {
    this.router.delete('/TpOcorrencia2/:id', TpOcorrencia2Controller.delete);
  }
}

export default new TpOcorrencia2Router().router;
