import mongoose, { Schema } from 'mongoose';

class UnidadeModel {
  constructor() {
    this.Schema = new Schema({
      id_loja: {
        type: String,
        required: true,
        index: { unique: true },
      },
      nome: {
        type: String,
        required: true,
      },
      obs: {
        type: String,
        required: false,
      },
      email1: {
        type: String,
        required: true,
      },
      email2: {
        type: String,
        required: false,
      },
      email3: {
        type: String,
        required: false,
      },
      email4: {
        type: String,
        required: false,
      },
      ativo: {
        type: Boolean,
        required: true,
      },
    });
    this.model = mongoose.model('Unidades', this.Schema);
  }
}

export default new UnidadeModel().model;
