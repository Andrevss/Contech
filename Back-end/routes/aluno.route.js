const express = require('express');
const app = express();
const alunoRoutes = express.Router();

let Aluno = require('../model/Aluno');

// api to post alunos
alunoRoutes.post('/', async (req, res) =>{

    const {nome, email, cpf, curso, instituicao, grau, anoEntrada, tecnologias, funcao, empresa, dataInic, dataFim, sobre} = req.body;

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
        sobre,
    }

    try {
        await Aluno.create(aluno)

        res.status(201).json({message: "Pessoa inserida no banco com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

// api to get alunos
alunoRoutes.get('/', async (req, res) => {
  try {
    const students = await Aluno.find()

    res.status(200).json(students)
  } catch (error) {
    res.students(500).json({error: error})
  }
})

// api to get alunos by id
alunoRoutes.get('/:id', async (req, res) =>{
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
alunoRoutes.patch('/:id', async (req, res) => {

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
alunoRoutes.patch('/:id', async (req, res) => {

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
alunoRoutes.patch('/:id', async (req, res) => {

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
alunoRoutes.delete('/:id', async (req, res) => {
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