import mongoose, { Schema } from 'mongoose';

class TpOcorrencia2Model {
  constructor() {
    this.Schema = new Schema({
      id_tpocorr2: {
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
    this.model = mongoose.model('TpOcorrencia2', this.Schema);
  }
}

export default new TpOcorrencia2Model().model;
