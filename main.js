document.getElementById('formulario').addEventListener('submit' , adicionar)
function adicionar() {
    var modeloCarro = document.getElementById('textveiculo').value
    var placaCarro = document.getElementById('placaveiculo').value
    var time = new Date()
    if(modeloCarro == "" || placaCarro == "" ){
		
		alert("Preencha todos os campos!");
		return false;
	} 

    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes(),
    }   
    

    if (localStorage.getItem('patio') === null) {
        var carros = [];
        carros.push(carro)
        localStorage.setItem('patio', JSON.stringify(carros))
    }else {
        var carros = JSON.parse(localStorage.getItem('patio'))
        carros.push(carro)
        localStorage.setItem('patio', JSON.stringify(carros))
    }
  
    document.getElementById('textveiculo').value = ' '  
    document.getElementById('placaveiculo').value = ' '
}
mostraPatio();

function apagarVeiculo(placa){
	
	console.log(patio)

}



function mostraPatio(){
   var carros1 = JSON.parse(localStorage.getItem('patio'))
   var carrosResultado = document.getElementById('resultados')

   carrosResultado.innerHTML = " " 

   for (var i = 0; i <= carros1.length ; i++){
        var modelo = carros1[i].modelo  
        var placa = carros1[i].placa
        var hora = carros1[i].hora
        var minutos = carros1[i].minutos
        carrosResultado.innerHTML += '<tr><td>' + modelo +
                               '</td><td>' + placa + 
                               '</td><td>' + hora + ' : ' + minutos +
                                 '</td><td><button class="btn btn-danger" onclick=confirma(\'' +placa + '\')> Excluir </button>'
                                 
                                 '</tr>'       
   
   
                            }

}

function confirma(placa){

	var c = confirm("Deseja realmente excluir?");

	if (c) {
		removeVeiculo(placa);
		console.log('Carro removido!');
	} else {
		console.log('Carro não removido!');
		return false;
	}

}


function removeVeiculo(placa){
	var patio = JSON.parse(localStorage.getItem('patio'));
	console.log(patio);


	for(var i = 0 ; i < patio.length; i++){
		if(patio[i].placa == placa){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('patio', JSON.stringify(patio));

	mostraPatio();
}

