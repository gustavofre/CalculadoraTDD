
function soma(){
	const num1 = document.querySelector('#num1').value
	const num2 = document.querySelector('#num2').value
	var op = "soma";
	resultado = parseFloat(num1) + parseFloat(num2)
	document.getElementById("resultadoCalc").innerHTML = `O resultado é ${resultado}`
	enviaReq(resultado,op)
	event.preventDefault();
}


function subtrai(){
var inputNum1 = document.querySelector('#num1')
var inputNum2 = document.querySelector('#num2')
var num1 = inputNum1.value;
var num2 = inputNum2.value;
var op = "subtracao";
	resultado = parseFloat(num1) - parseFloat(num2)
	document.getElementById("resultadoCalc").innerHTML = `O resultado é ${resultado}`
	enviaReq(resultado, op)
	event.preventDefault();
}


function divide(){
	var inputNum1 = document.querySelector('#num1')
	var inputNum2 = document.querySelector('#num2')
	var num1 = inputNum1.value;
	var num2 = inputNum2.value;
	var op = "divisao";
	resultado = parseFloat(num1) / parseFloat(num2)
	document.getElementById("resultadoCalc").innerHTML = `O resultado é ${resultado}`
	enviaReq(resultado, op)
	event.preventDefault();
}


function multiplica(){
	var inputNum1 = document.querySelector('#num1')
	var inputNum2 = document.querySelector('#num2')
	var num1 = inputNum1.value;
	var num2 = inputNum2.value;
	var op = "multiplicacao";
	resultado = parseFloat(num1) * parseFloat(num2)
	document.getElementById("resultadoCalc").innerHTML = `O resultado é ${resultado}`
	enviaReq(resultado, op)
	event.preventDefault();
}


function resto(){
	var inputNum1 = document.querySelector('#num1')
	var inputNum2 = document.querySelector('#num2')
	var num1 = inputNum1.value;
	var num2 = inputNum2.value;
	var op = "resto";
	resultado = parseFloat(num1) % parseFloat(num2)
	document.getElementById("resultadoCalc").innerHTML = `O resultado é ${resultado}`
	enviaReq(resultado, op)
	event.preventDefault();
}


function limpa(){
	document.getElementById("resultadoCalc").innerHTML = ``
}

function fazPost(link, jsonEnvio) {
	console.log("Body=", jsonEnvio)

	var request = new XMLHttpRequest()
	request.open("POST", link, true)
	request.setRequestHeader("Content-type", "application/json")
	request.send(JSON.stringify(jsonEnvio)) 
	request.onload = function() {
			console.log(this.responseText)
	}
	return request.responseText 
}

function enviaReq(resultado, op){
	var link = "https://dweet.io/dweet/for/calculaduragaguvi"

	var inputNum1 = document.querySelector('#num1')
	var inputNum2 = document.querySelector('#num2')
	var num1 = inputNum1.value;
	var num2 = inputNum2.value;
	var inputBotao = document.querySelector('button')
	botao = inputBotao.value;

	jsonEnvio = {
			"Primeiro numero": num1,
			"Segundo Numero": num2,
			"Operacao Matematica": op,
			"Resultado": resultado
	}
	event.preventDefault();
	fazPost(link, jsonEnvio)
}

module.exports = {soma, subtrai, divide};
