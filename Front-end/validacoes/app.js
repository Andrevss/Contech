import {valida} from './validacoes'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) =>{
        valida(evento.target)
    })
})