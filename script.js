let nome = window.document.getElementById('nome')
let sugestao = document.querySelector('#sugestao')
let nomeOk = false
let sugestaoOK = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaSugestao() {
    let txtSugestao = document.querySelector('#txtSugestao')

    if (sugestao.value.length <= 5) {
        txtSugestao.innerHTML = 'Digite o nome completo da personalidade que gostaria de conhecer'
        txtSugestao.style.color = 'red'
        txtSugestao.style.display = 'block'
    } else {
        txtSugestao.style.display = 'none'
        sugestaoOK = true
    }
}

function enviar() {
    if (nomeOk == true && sugestaoOK == true) {
        alert('Sugestão enviada com sucesso!')
    } else {
        alert('Preencha os dados corretamente para enviar sua sugestão!')
    }
}