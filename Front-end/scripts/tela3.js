const btn = document.querySelector("#login");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    const valueEmail = email.value;
    const valueSenha = senha.value;

    if(valueEmail == "portodigital@pcr.pe.br" && valueSenha == "portodigital"){
        window.location.href = "tela5.html"
    }
    if(valueEmail == "aluno@pcr.pe.br" && valueSenha == "aluno"){
        window.location.href = "tela4.html"
    }
})