function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('ERRO - Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto ')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade>=0 && idade <=10){
                // Crianca
                img.setAttribute('src','foto-menino.png')
            } else if (idade < 23) {
                //jovem
                img.setAttribute('src','foto-jovem-homem.png')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src','foto-homem.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade>=0 && idade <=10){
                // Crianca
                img.setAttribute('src','foto-menina.png')
            } else if (idade < 23) {
                //jovem
                img.setAttribute('src','foto-jovem-mulher.png')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src','foto-mulher.png')
            } else {
                //idosa
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
    
}