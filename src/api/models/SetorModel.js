import mongoose, { Schema } from 'mongoose';

class SetorModel {
  constructor() {
    this.Schema = new Schema({
      id_setor: {
        type: Number,
        required: true,
        index: { unique: true },
      },
      descricao: {
        type: String,
        required: true,
      },
      ativo: {
        type: Boolean,
        required: true,
      },
      email_gerente: {
        type: Boolean,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    });
    this.model = mongoose.model('Setores', this.Schema);
  }
}

export default new SetorModel().model;
