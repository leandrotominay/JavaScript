function verificar() {
    var ano, genero, idade, anoAtual, data, msg, img, info

    data = new Date()
    anoAtual = data.getFullYear()
    ano = (document.getElementById('ano'))
    idade = anoAtual - Number(ano.value)
    info = document.getElementById('info')
    genero = document.getElementsByName('genero')
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')

    if (idade > 0 && idade < 111) {
        var tipo = ''
       
        if (genero[0].checked) {
            if (idade > 0 && idade < 4) {
                tipo = 'um bebê menino'
                img.innerHTML = `<img id="img" src="Fotos/meninomenina0a3.png" alt="">`

            } else if (idade < 11) {
                tipo = 'um menino'
                img.innerHTML = `<img id="img" src="Fotos/menino4a10.png" alt="">`


            } else if (idade < 21) {
                tipo = 'um jovem homem'
                img.innerHTML = `<img id="img" src="Fotos/menino11a18.png" alt="">`


            } else if (idade < 54) {
                tipo = 'um homem'
                img.innerHTML = `<img id="img" src="Fotos/menino19a45.png" alt="">`

            } else {
                tipo = 'um idoso'
                img.innerHTML = `<img id="img" src="Fotos/menino46a90.png" alt="">`

            }

        } else if (genero[1].checked) {
            if (idade > 1 && idade < 5) {
                tipo = 'uma bebê menina'
                img.innerHTML = `<img id="img" src="Fotos/bebeMenina.jpeg" alt="">`

            } else if (idade < 11) {
                tipo = 'uma menina'
                img.innerHTML = `<img id="img" src="Fotos/menina4a10.jpeg" alt="">`

            } else if (idade < 21) {
                tipo = 'uma jovem mulher'
                img.innerHTML = `<img id="img" src="Fotos/menina11a18.png" alt="">`

            } else if (idade < 54) {
                tipo = 'uma mulher'
                img.innerHTML = `<img id="img" src="Fotos/menina19a45.png" alt="">`

            } else {
                tipo = 'uma mulher idosa'
                img.innerHTML = `<img id="img" src="Fotos/menina46a90.png" alt="">`

            }

        }

        info.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${tipo} com ${idade} anos de idade`

    } else {
        alert('Erro: campo inválido')
    }

}