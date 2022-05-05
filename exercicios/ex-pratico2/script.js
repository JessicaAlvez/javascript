function verificar() {
    let data = new Date ()
    let ano = data.getUTCFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO: Verifique os dados, e tente novamente!')
    } else {
        
    }
}