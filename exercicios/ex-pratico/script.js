let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')

let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if  (hora >=0 && hora < 12) {
    //Bom dia
    img.src = 'imagens/fotomanha.png' 
    document.body.style.background = '#6194d4'
} else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = 'imagens/fototarde.png'
    document.body.style.background = '#ffd055'
} else {
    //Boa noite
    img.src = 'imagens/fotnoite.png'
    document.body.style.background = '#464641'
}