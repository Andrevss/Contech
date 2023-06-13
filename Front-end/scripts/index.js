const form1 = document.getElementById('form')

form1.addEventListener('submit', evento =>{
    evento.preventDefault();

    const formData = new FormData(form1);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3000/aluno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))

    window.location.href="tela4.html"
})

