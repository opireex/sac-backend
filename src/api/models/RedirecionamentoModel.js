import mongoose, { Schema } from 'mongoose';

class RedirecionamentoModel {
  constructor() {
    this.Schema = new Schema({
      id_redirec: {
        type: Number,
        required: true,
        index: { unique: true },
      },
      descricao: {
        type: String,
        required: true,
      },
    });
    this.model = mongoose.model('Redirecionamentos', this.Schema);
  }
}

export default new RedirecionamentoModel().model;
