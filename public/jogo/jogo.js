var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempoMosca = 0
var nivel = window.location.search
nivel = nivel.replace('?','')


if(nivel ==='normal'){
	tempoMosca = 1500
}else if(nivel === 'dificil'){
	tempoMosca = 1000
}else if(nivel === 'muitodificil'){
	tempoMosca = 750
}


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura,largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo<0){
		clearInterval(cronometro)
		window.location.href = 'ganhou.html'
		
	} else{
	document.getElementById('cronometro').innerHTML=tempo
	
	}
}, 1000)

function posicaoRandomica(){
	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		if(vidas>3){
			window.location.href = 'fim_de_jogo.html'
		}
		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
		vidas++
	}



	var posicaoY = Math.floor(Math.random() * altura) - 110
	var posicaoX = Math.floor(Math.random() * largura) - 110

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	var mosquito = document.createElement('img')
	mosquito.src = "imagens/mosca.png"
	mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
	mosquito.style.left = posicaoX+'px'
	mosquito.style.top = posicaoY+'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
	var classe =Math.floor( Math.random()*3)
	switch(classe){
		case 0:
		return 'mosca1'

		case 1:
		return 'mosca2'

		case 2:
		return 'mosca3'
	}

}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
		case 0:
		return 'ladoA'

		case 1: 
		return 'ladoB'

	}
}