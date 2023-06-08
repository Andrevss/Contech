const perfisCpf = document.querySelector('#perfis-cpf')
const perfisNome = document.querySelector('#perfis-nome')
const perfisEmail = document.querySelector('#perfis-email')
const perfisCurso = document.querySelector('#perfis-curso')
const perfisInstituicao = document.querySelector('#perfis-instituicao')



async function getAllPost(){
    const response = await fetch('http://localhost:3000/aluno');

    console.log(response);

    const data = await response.json();

    console.log(data);

    data.map((post) =>{
        
        const pCpf = document.createElement("h4")
        const pNome = document.createElement("h4")
        const pEmail = document.createElement("h4")
        const pCurso = document.createElement("h4")
        const pInstituicao = document.createElement("h4")
        const cpf = document.createElement("h4")
        const nome = document.createElement("h4")
        const email = document.createElement("h4")
        const curso = document.createElement("h4")
        const faculdade = document.createElement("h4")

        cpf.innerText = post.cpf;
        nome.innerText = post.nome;
        email.innerText = post.email;
        curso.innerText = post.curso;
        faculdade.innerText = post.instituicao

        pCpf.appendChild(cpf)
        pNome.appendChild(nome)
        pEmail.appendChild(email)
        pCurso.appendChild(curso)
        pInstituicao.appendChild(faculdade)

        perfisCpf.appendChild(pCpf)
        perfisNome.appendChild(pNome)
        perfisEmail.appendChild(pEmail)
        perfisCurso.appendChild(pCurso)
        perfisInstituicao.appendChild(pInstituicao)

    })
}

getAllPost();