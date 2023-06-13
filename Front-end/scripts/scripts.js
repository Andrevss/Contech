//constantes da tela 5 
const perfisCpf = document.querySelector('#perfis-cpf')
const perfisNome = document.querySelector('#perfis-nome')
const perfisEmail = document.querySelector('#perfis-email')
const perfisCurso = document.querySelector('#perfis-curso')
const perfisInstituicao = document.querySelector('#perfis-instituicao')
const iconPerfil = document.querySelector('#icon-perfil')
const iconDelete = document.querySelector('#icon-delete')

//constantes da tela 6
const perfisnome = document.querySelector('#perfis-nome')
const perfisemail = document.querySelector('#perfis-email')
const perfiscpf = document.querySelector('#perfis-cpf')
const perfisdataNasc = document.querySelector('#perfis-dataNasc')
const perfisgithub = document.querySelector('#perfis-github')
const perfislinkedin = document.querySelector('#perfis-linkedin')
const perfiscurso = document.querySelector('#perfis-curso')
const perfisinstituicao = document.querySelector('#perfis-instituicao')
const perfisgrau = document.querySelector('#perfis-grau')
const perfisanoEntrada = document.querySelector('#perfis-anoEntrada')
const perfistecnologias = document.querySelector('#perfis-tecnologias')
const perfisempresa = document.querySelector('#perfis-empresa')
const perfiscargo = document.querySelector('#perfis-cargo')
const perfisarea = document.querySelector('#perfis-area')
const perfisinicio = document.querySelector('#perfis-inicio')
const perfissaida = document.querySelector('#perfis-saida')

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

const url = "http://localhost:3000/aluno"

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
        const pPerfil = document.createElement("a")
        const pDelete = document.createElement("a")
        const cpf = document.createElement("h4")
        const nome = document.createElement("h4")
        const email = document.createElement("h4")
        const curso = document.createElement("h4")
        const faculdade = document.createElement("h4")
        const verPerfil = document.createElement("a")
        const deletar = document.createElement("a")

        

        cpf.innerText = post.cpf;
        nome.innerText = post.nome;
        email.innerText = post.email;
        curso.innerText = post.curso;
        faculdade.innerText = post.instituicao
        verPerfil.setAttribute("class", `fa-solid fa-id-card`)
        verPerfil.setAttribute("href", `../pages/tela6.html?id=${post._id}`)
        deletar.setAttribute("class", `fa-solid fa-trash`)
        deletar.setAttribute("href", `../pages/tela6.html?id=${post._id}`)

        pCpf.appendChild(cpf)
        pNome.appendChild(nome)
        pEmail.appendChild(email)
        pCurso.appendChild(curso)
        pInstituicao.appendChild(faculdade)
        pPerfil.appendChild(verPerfil)
        pDelete.appendChild(deletar)

        perfisCpf.appendChild(pCpf)
        perfisNome.appendChild(pNome)
        perfisEmail.appendChild(pEmail)
        perfisCurso.appendChild(pCurso)
        perfisInstituicao.appendChild(pInstituicao)
        iconPerfil.appendChild(pPerfil)
        iconDelete.appendChild(pDelete)

    })
}

async function getPost(id){
    const responsePost = await fetch(`${url}/${id}`)
    
    const dataPost = await responsePost.json()

    const name = document.createElement("h4")
    const pname = document.createElement("h4")

    name.innerText = dataPost.nome

    pname.appendChild(name)

    perfisNome.appendChild(pname)
    
}

if(!postId) {
    getAllPost();
} else {
    console.log(postId)
}

