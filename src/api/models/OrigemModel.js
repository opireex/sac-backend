import mongoose, { Schema } from 'mongoose';

class OrigemModel {
  constructor() {
    this.Schema = new Schema({
      id_origem: {
        type: Number,
        required: true,
        index: { unique: true },
      },
      descricao: {
        type: String,
        required: true,
      },
    });
    this.model = mongoose.model('Origens', this.Schema);
  }
}

export default new OrigemModel().model;
