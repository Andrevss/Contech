const perfisContainer = document.querySelector('#perfis-container')

async function getAllPost(){
    const response = await fetch('http://localhost:3000/aluno');

    console.log(response);

    const data = await response.json();

    console.log(data);

    data.map((post) =>{
        
        const div = document.createElement("div")
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

        div.appendChild(cpf)
        div.appendChild(nome)
        div.appendChild(email)
        div.appendChild(curso)
        div.appendChild(faculdade)

        perfisContainer.appendChild(div)

    })
}

getAllPost();