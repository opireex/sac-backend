import UnidadeModel from '../models/UnidadeModel.js';

export default class UnidadeController {
  static create(req, res) {
    UnidadeModel.create(req.body)
      .then((out) => {
        const { id_loja, nome } = out;
        res.status(201).send({ id_loja, nome });
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static readAll(req, res) {
    UnidadeModel.find({}, '-_id -__v')
      .sort({ id_loja: 1 })
      .then((out) => {
        res.status(200).json(out);
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static readOne(req, res) {
    UnidadeModel.find({ id_loja: req.params.id }, '-_id -__v')
      .then((out) => {
        res.status(200).json(out);
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static update(req, res) {
    UnidadeModel.findOneAndUpdate({ id_loja: req.params.id }, req.body, {
      new: true,
      projection: '-_id -__v',
    })
      .sort({ id_loja: 1 })
      .then((outBefore) => {
        if (!outBefore) return res.status(404).send();
        UnidadeModel.findOne({ id_loja: req.body.id_loja }, '-_id -__v').then(
          (outAfter) =>
            res.status(200).json({ before: outBefore, after: outAfter }),
        );
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static delete(req, res) {
    UnidadeModel.deleteOne({ id_loja: req.params.id })
      .then((out) => res.json(out))
      .catch((err) => res.status(500).send(err.message));
  }
}
