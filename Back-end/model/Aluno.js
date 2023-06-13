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
    type: String
  },
  rg: {
    type: String
  },
  dataNasc: {
    type: String
  },
  sexo: {
    type: String
  },
  PrimeiraSenha: {
    type: String
  },
  sobre: {
    type: String
  },
  github: {
    type: String
  },
  linkedin: {
    type: String
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
    type: String
  },
  tecnologias: {
    type: String
  },
  empresa: {
    type: String
  },
  cargo: {
    type: String
  },
  area: {
    type: String
  },
  inicio: {
    type: String
  },
  saida: {
    type: String
  },
},{
    collection: 'aluno'
});

module.exports = mongoose.model('Aluno', Aluno);