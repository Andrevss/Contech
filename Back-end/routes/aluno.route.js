const express = require('express');
const app = express();
const alunoRoutes = express.Router();

let Aluno = require('../model/Aluno');

// api to post alunos
alunoRoutes.post('/', async (req, res) =>{

    const {nome, email, cpf, rg, dataNasc, sexo, PrimeiraSenha, sobre, github, linkedin, curso, instituicao, grau, anoEntrada, tecnologias, empresa, cargo, area, atividades, inicio, saida} = req.body;

    const aluno = {
      nome, email, cpf, rg, dataNasc, sexo, PrimeiraSenha, sobre, github, linkedin, curso, instituicao, grau, anoEntrada, tecnologias, empresa, cargo, area, atividades, inicio, saida
    }

    try {
        await Aluno.create(aluno)

        res.status(201).json({message: "Pessoa inserida no banco com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

// api to get alunos
alunoRoutes.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const aluno = await Aluno.findOne({ _id: id })

    if (!aluno) {
      res.status(404).json({ message: 'Aluno não encontrado' })
      return
    }

    res.status(200).json(aluno)
  } catch (error) {
    res.status(500).json({ error: error })
  }
});

// api to get all alunos
alunoRoutes.get('/', async (req, res) => {
  try {
    const students = await Aluno.find()

    res.status(200).json(students)
  } catch (error) {
    res.students(500).json({error: error})
  }
})



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