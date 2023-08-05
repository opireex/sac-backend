import mongoose, { Schema } from 'mongoose';

class TpReclamacaoModel {
  constructor() {
    this.Schema = new Schema({
      id_tpreclam: {
        type: Number,
        required: true,
        index: { unique: true },
      },
      descricao: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    });
    this.model = mongoose.model('TpReclamacao', this.Schema);
  }
}

export default new TpReclamacaoModel().model;
