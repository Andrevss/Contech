const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Aluno = new Schema({
  nome: {
    type: String
  },
  email: {
    type: String
  },
  cpf: {
    type: Number
  },
  curso: {
    type: String
  },
  instituicao: {
    type: String
  },
  grau: {
    type: String
  },
  anoEntrada: {
    type: Date
  },
  tecnologias: {
    type: Number
  },
  funcao: {
    type: String
  },
  empresa: {
    type: String
  },
  dataInic: {
    type: Date
  },
  dataFim: {
    type: Date
  },
  sobre: {
    type: String
  }
},{
    collection: 'aluno'
});

module.exports = mongoose.model('Aluno', Aluno);