import OcorrenciaModel from '../models/OcorrenciaModel.js';

export default class OcorrenciaController {
  static create(req, res) {
    OcorrenciaModel.create()
      .then(() => ())
      .catch((err) => res.status(500).send(err.message));
  }

  static readAll(req, res) {
    OcorrenciaModel.find()
    .sort()
    .then(() => ())
    .catch((err) => res.status(500).send(err.message));
  }

  static readOne(req, res) {
    OcorrenciaModel.findOne()
    .then(() => ())
    .catch((err) => res.status(500).send(err.message));
  }

  static update(req, res) {
    OcorrenciaModel.findOneAndUpdate()
    .then(() => ())
    .catch((err) => res.status(500).send(err.message));
  }

  static delete(req, res) {
    OcorrenciaModel.deleteOne()
    .then(() => ())
    .catch((err) => res.status(500).send(err.message));
  }
}
