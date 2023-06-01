const express = require('express');
const app = express();
const alunoRoutes = express.Router();

let Aluno = require('../model/Aluno');

// api to post alunos
alunoRoutes.route('/aluno').post(async (req, res) =>{

    const {nome, email, cpf, curso, instituicao, grau, anoEntrada, funcao, empresa, dataInic, dataFim} = req.body
    //Validações
    if(!nome){
        res.status(422).json({error: 'O nome é obrigatório!'})
    }else if(!email){
        res.status(422).json({error: 'O email é obrigatório!'})
    }else if(!cpf){
      res.status(422).json({error: 'O CPF é obrigatório!'})
    }else if(!curso){
      res.status(422).json({error: 'O nome do curso é obrigatório!'})
    }else if(!instituicao){
      res.status(422).json({error: 'O nome da instituiçaõ de ensino é obrigatório!'})
    }else if(!grau){
      res.status(422).json({error: 'O grau de escolaridade é obrigatório!'})
    }else if(!anoEntrada){
      res.status(422).json({error: 'O ano de entrada é obrigatório!'})
    }else if(!funcao){
      res.status(422).json({error: 'O cargo é obrigatório!'})
    }else if(!empresa){
      res.status(422).json({error: 'O nome da empresa é obrigatório!'})
    }else if(!dataInic){
      res.status(422).json({error: 'A data de inicio é obrigatória!'})
    }else if(!dataFim){
      res.status(422).json({error: 'A data de término é obrigatória!'})
    }

    const aluno = {
        nome, 
        email, 
        cpf,
        curso,
        instituicao,
        grau,
        anoEntrada,
        tecnologias,
        funcao,
        empresa,
        dataInic,
        dataFim,
        sobre
    }

    try {
        await Aluno.create(aluno)

        res.status(201).json({message: "Pessoa inserida no banco com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

// api to get alunos
alunoRoutes.route('/').get (async (req, res) => {
  try {
    const students = await Aluno.find()

    res.status(200).json(students)
  } catch (error) {
    res.students(500).json({error: error})
  }
})

// api to get alunos by id
alunoRoutes.route('/aluno/:id').get(async (req, res) =>{
  const id = req.params.id;

  try {
    const person = await Aluno.findOne({_id: id})

    if(!Aluno) {
      res.status(422).json({message: 'Usuário não encontrado'})
      return
    }
  } catch (error) {
    res.status(500).json({error: error})
  }
  
});

// api to update personal aluno data (patch route)
alunoRoutes.route('/:id').patch(async (req, res) => {

  const {nome, email, cpf} = req.body

  const alunoDados = {
    nome, 
    email,
    cpf,
  }

  try {
    const updateAluno = await Aluno.updateOne({_id: id}, alunoDados)

    if(updateAluno.matchedCount === 0){
      res.status(422).json({message: 'Usuário não encontrado'})
      return
    }

    res.status(200).json(alunoDados)

  } catch (error) {
    res.status(500).json({error: error})
  }

})

//api to update academic aluno data (patch routes)
alunoRoutes.route('/:id').patch(async (req, res) => {

  const {instituicao, grau, anoEntrada} = req.body

  const alunoDados = {
    instituicao,
    grau,
    anoEntrada,
  }

  try {
    const updateAluno = await Aluno.updateOne({_id: id}, alunoDados)

    if(updateAluno.matchedCount === 0){
      res.status(422).json({message: 'Usuário não encontrado'})
      return
    }

    res.status(200).json(alunoDados)

  } catch (error) {
    res.status(500).json({error: error})
  }

})

//api to update professional aluno data (patch routes)
alunoRoutes.route('/:id').patch(async (req, res) => {

  const {funcao, empresa, dataInic, dataFim} = req.body

  const alunoDados = {
    funcao,
    empresa,
    dataInic,
    dataFim,
  }

  try {
    const updateAluno = await Aluno.updateOne({_id: id}, alunoDados)

    if(updateAluno.matchedCount === 0){
      res.status(422).json({message: 'Usuário não encontrado'})
      return
    }

    res.status(200).json(alunoDados)

  } catch (error) {
    res.status(500).json({error: error})
  }

})

// api for delete alunos
alunoRoutes.route('/:id').delete(async (req, res) => {
  const id = req.params.id

  const aluno = await Aluno.findOne({_id: id})

  if(!aluno) {
    res.status(422).json({message: 'Usuário não encontrado'})
    return
  }

  try {
    await Aluno.deleteOne({_id: id})
    res.status(200).json({message: 'Usuário removido com sucesso'})
    
  } catch (error) {
    res.status(500).json({error: error})
  }
})

module.exports = alunoRoutes;