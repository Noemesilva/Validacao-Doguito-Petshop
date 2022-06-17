const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) =>{
    validadataNascimento(evento.target)
})

function validadataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

   if( !maiorQue18(dataRecebida)) {
       mensagem = 'Você deve ter maior que 18 anos para se cadastrar.'
    }
    input.setCustomValidity(mensagem)
}
function maiorQue18(data) {
     const dataAtual = new Date()
     const dataMais18 = new Date(data.getUTCfullYear() + 18, data.getUTCMonth(), data.getUTCDate())

     return dataMais18 <= dataAtual
}
 function mostrarOcultarSenha() {
    var senha = document.getElementById("senha")
    if(senha.type==="password") {
        senha.type = "text"
    }else{
        senha.type = "password"
    }
 }