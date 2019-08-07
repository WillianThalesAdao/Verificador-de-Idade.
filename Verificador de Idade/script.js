function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verificar os dados e tente novamente =!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fesex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebezinho.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                //adultp
                img.setAttribute('src', 'homemjovem.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebezinha.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulherjovem.png')
            } else {
                //idoso
                img.setAttribute('mulheridosa.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}