var nuevaTarea = document.getElementById("nueva-tarea");
var contenedor = document.getElementById("contenedor");
var caja = document.createElement('div');
var entrada = document.createElement('input');
	entrada.setAttribute("id","lista");
var boton = document.createElement('button');
	boton.setAttribute("id", "agr");
var btnTrj = document.createElement('button');
var tarj = document.createElement('textArea');
	tarj.setAttribute("placeholder","Añadir tarjeta");
var caja2 = document.createElement('div');
	caja2.setAttribute("id","cajaDos");


 nuevaTarea.addEventListener("click", function(){
 	var texto = document.createTextNode("Guardar");

	caja.appendChild(entrada);
	caja.appendChild(boton);
	contenedor.appendChild(caja);
	boton.appendChild(texto);

});

 boton.addEventListener("click", function(){

  	var titulo = document.createElement('li');
 	var lista = document.createTextNode(entrada.value);
 	var txt2 = document.createTextNode('Añadir');

 	caja.appendChild(caja2);
 	caja2.appendChild(titulo);
 	titulo.appendChild(lista);
 	caja2.appendChild(tarj);
 	caja2.appendChild(btnTrj);
 	btnTrj.appendChild(txt2);
 });
 
 tarj.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode == 13){
		var tarjeta = document.createElement('div');
	    var text1 = document.createTextNode(tarj.value);
	    caja2.appendChild(tarjeta);
	    tarjeta.appendChild(text1);

	    
	    
	    caja2.removeChild(caja2.childNodes[1]);
   	}

});