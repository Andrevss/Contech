function mascara_cpf(){
    var cpf = document.getElementById('cpf')

    if(cpf.value.length == 3 || cpf.value.length ==7){
        cpf.value += "."
    }else if(cpf.value.length ==11){
        cpf.value += "-"
    }
}

function mascara_rg(){
    var rg = document.getElementById('rg')

    if(rg.value.length == 1 || rg.value.length == 5){
        rg.value += "."
    }
}