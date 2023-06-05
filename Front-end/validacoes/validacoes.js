export function valida(input) {
    const tipoDeinput = input.dataset.tipo

    if(validadores[tipoDeinput]) {
        validadores[tipoDeinput](input)
    }
}

const validadores = {
    dataNasc:input => validaDataNascimento(input)
}

const dataNascimento = document.querySelector('#DataNasc')
dataNascimento.addEventListener('blue', (evento)=>{
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue16(dataRecebida)){
        mensagem = 'Você deve ser maior que 16 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue16(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}

