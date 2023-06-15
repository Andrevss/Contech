//constantes da tela 5 
const perfisCpf = document.querySelector('#perfis-cpf')
const perfisNome = document.querySelector('#perfis-nome')
const perfisCurso = document.querySelector('#perfis-curso')
const perfisInstituicao = document.querySelector('#perfis-instituicao')
const iconPerfil = document.querySelector('#icon-perfil')
const iconDelete = document.querySelector('#icon-delete')

//constantes da tela 6
const perfisnome = document.querySelector('#nome')
const perfisemail = document.querySelector('#email')
const perfiscpf = document.querySelector('#cpf')
const perfisrg = document.querySelector('#rg')
const perfisdataNasc = document.querySelector('#dataNasc')
const perfisgithub = document.querySelector('#github')
const perfislinkedin = document.querySelector('#linkedin')
const perfisSobre = document.querySelector('#sobre')
const perfiscurso = document.querySelector('#curso')
const perfisinstituicao = document.querySelector('#instituicao')
const perfisgrau = document.querySelector('#grau')
const perfisanoEntrada = document.querySelector('#anoEntrada')
const perfistecnologias = document.querySelector('#tecnologias')
const perfisempresa = document.querySelector('#empresa')
const perfiscargo = document.querySelector('#cargo')
const perfisarea = document.querySelector('#area')
const perfisativ = document.querySelector('#atividades')
const perfisinicio = document.querySelector('#inicio')
const perfissaida = document.querySelector('#saida')

const urlSearchParams = new URLSearchParams(window.location.search)
const id = urlSearchParams.get("id")

const url = "http://localhost:3000/aluno"

fetch(`http://localhost:3000/aluno/${id}`)

    .then((response) => response.json())
    .then((aluno) => {
        const nome = document.createElement('h4');
        const email = document.createElement('h4');
        const cpf= document.createElement('h4');
        const rg= document.createElement('h4');
        const nascimento = document.createElement('h4');
        const github = document.createElement('a');
        const linkedin = document.createElement('a');
        const sobre = document.createElement('h4')
        const curso = document.createElement('h4');
        const instituicao = document.createElement('h4');
        const grau = document.createElement('h4');
        const entrada = document.createElement('h4');
        const tec = document.createElement('h4');
        const empresa = document.createElement('h4');
        const cargo = document.createElement('h4');
        const area = document.createElement('h4');
        const atividades = document.createElement('h4');
        const inicio = document.createElement('h4');
        const saida = document.createElement('h4');

        nome.textContent = aluno.nome;
        email.textContent = aluno.email;
        cpf.textContent = aluno.cpf;
        rg.textContent = aluno.rg;
        nascimento.textContent = aluno.dataNasc;
        github.textContent = aluno.github
        github.setAttribute("href", `https://www.${aluno.github}`)
        linkedin.textContent = aluno.linkedin
        linkedin.setAttribute("href", `https://${aluno.linkedin}`)
        sobre.textContent = aluno.sobre
        curso.textContent = aluno.curso
        instituicao.textContent = aluno.instituicao
        grau.textContent = aluno.grau
        entrada.textContent = aluno.anoEntrada
        tec.textContent = aluno.tecnologias
        empresa.textContent = aluno.empresa
        cargo.textContent = aluno.cargo
        area.textContent = aluno.area
        atividades.textContent = aluno.atividades
        inicio.textContent = aluno.inicio
        saida.textContent = aluno.saida
        
        perfisnome.appendChild(nome);
        perfisemail.appendChild(email);
        perfiscpf.appendChild(cpf);
        perfisrg.appendChild(rg);
        perfisdataNasc.appendChild(nascimento);
        perfisgithub.appendChild(github);
        perfislinkedin.appendChild(linkedin);
        perfisSobre.appendChild(sobre);
        perfiscurso.appendChild(curso);
        perfisinstituicao.appendChild(instituicao);
        perfisgrau.appendChild(grau);
        perfisanoEntrada.appendChild(entrada);
        perfistecnologias.appendChild(tec);
        perfisempresa.appendChild(empresa);
        perfiscargo.appendChild(cargo);
        perfisarea.appendChild(area);
        perfisativ.appendChild(atividades);
        perfisinicio.appendChild(inicio);
        perfissaida.appendChild(saida);
    })

async function getAllPost(){
    const response = await fetch('http://localhost:3000/aluno');

    console.log(response);

    const data = await response.json();

    console.log(data);

    data.map((post) =>{
        
        const cpf = document.createElement("h4")
        const nome = document.createElement("h4")
        const curso = document.createElement("h4")
        const faculdade = document.createElement("h4")
        const verPerfil = document.createElement("a")
        const deletar = document.createElement("a")

        cpf.innerText = post.cpf;
        nome.innerText = post.nome;
        curso.innerText = post.curso;
        faculdade.innerText = post.instituicao
        verPerfil.setAttribute("class", `fa-solid fa-id-card`)
        verPerfil.setAttribute("href", `../pages/tela6.html?id=${post._id}`)
        deletar.setAttribute("class", `fa-solid fa-trash`)
        deletar.setAttribute("onclick", `deletarAluno()`)

        perfisCpf.appendChild(cpf)
        perfisNome.appendChild(nome)
        perfisCurso.appendChild(curso)
        perfisInstituicao.appendChild(faculdade)
        iconPerfil.appendChild(verPerfil)
        iconDelete.appendChild(deletar)        

    })
}

async function deletarAluno(){

    const urlSearchParams = new URLSearchParams(window.location.search)
    const id = urlSearchParams.get("id")

    try {
        const headers = {
            'Content-Type': 'applicatio/json'
        };

        const init = {
            method: 'DELETE',
            headers: headers, 
        }
        const response = await fetch(`http://localhost:3000/aluno/${id}`, init);

        const jsonData = await response.json();

        console.log(jsonData);
    } catch (e){
        console.log('Deu Erro', e);
    }
};

if(!id) {
    getAllPost();
} else {
    console.log(id)
}

