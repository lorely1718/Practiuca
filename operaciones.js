function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var Der = function (n1){ 

	var numero1 = parseInt(document.getElementById("introduce el coeficiente").value);
	var numero2 = parseInt(document.getElementById("introduce el exponente").value);
	
	var  resultado= numero1 * numero2;
 
	return resultado;
	 }
	
	 function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var Time = function (n1, n2){ 
	

	var numero1 = parseInt(document.getElementById("Distancia").value);
	var numero2=parseInt(document.getElementById("Velocidad").value);
	var resultado = numero1 / numero2;

	return resultado;

	}