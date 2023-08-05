import mongoose, { Schema } from 'mongoose';

class OcorrenciaModel {
  constructor() {
    this.Schema = new Schema({
      id_ocorr: {
        type: Number,
        required: true,
        index: { unique: true },
      },
      dt_movto: {
        type: Date,
        required: true,
      },
      nome: {
        type: String,
        required: false,
      },
      telefone: {
        type: String,
        required: false,
      },
      id_loja: {
        type: Number,
        required: false,
      },
      id_tpocorr: {
        type: Number,
        required: false,
      },
      id_origem: {
        type: Number,
        required: false,
      },
      descricao: {
        type: Boolean,
        required: false,
      },
      resposta: {
        type: Boolean,
        required: false,
      },
      status: {
        type: String,
        required: false,
      },
      usuario: {
        type: String,
        required: false,
      },
      atendente: {
        type: String,
        required: false,
      },
      id_tpocorr2: {
        type: Number,
        required: false,
      },
      horin: {
        type: String,
        required: false,
      },
      horfim: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: false,
      },
      id_tpreclam: {
        type: Number,
        required: false,
      },
      sc_resolv: {
        type: String,
        required: false,
      },
      sc_satisf: {
        type: String,
        required: false,
      },
      sc_nota: {
        type: Number,
        required: false,
      },
      sc_volta: {
        type: Boolean,
        required: false,
      },
      id_setor: {
        type: Number,
        required: false,
      },
      id_redirec: {
        type: Number,
        required: false,
      },
      email_red: {
        type: String,
        required: false,
      },
      cpf: {
        type: String,
        required: false,
      },
    });
    this.model = mongoose.model('Ocorrencias', this.Schema);
  }
}

export default new OcorrenciaModel().model;
