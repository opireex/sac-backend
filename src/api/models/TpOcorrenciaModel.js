import mongoose, { Schema } from 'mongoose';

class TpOcorrenciaModel {
  constructor() {
    this.Schema = new Schema({
      id_tpocorr: {
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
    this.model = mongoose.model('TpOcorrencia', this.Schema);
  }
}

export default new TpOcorrenciaModel().model;
