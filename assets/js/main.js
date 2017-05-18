var nuevaTarea = document.getElementById("nueva-tarea");
var contenedor = document.getElementById("contenedor");
var caja = document.createElement('div');
var entrada = document.createElement('input');
	entrada.setAttribute("id","lista");
var boton = document.createElement('button');
	boton.setAttribute("id", "agr");


 nuevaTarea.addEventListener("click", function(){
 	var texto = document.createTextNode("Guardar");

	caja.appendChild(entrada);
	caja.appendChild(boton);
	contenedor.appendChild(caja);
	boton.appendChild(texto);

});

 boton.addEventListener("click", function(){

  	var caja2 = document.createElement('div');//padre
 	var titulo = document.createElement('li');
 	var lista = document.createTextNode(entrada.value);
 	var tarj = document.createElement('textArea');// hijo de div
 		tarj.setAttribute("placeholder","Añadir tarjeta");
 	var boton = document.createElement('button');// hijo de div
 	var txt2 = document.createTextNode('Añadir');

 	caja.appendChild(caja2);
 	caja2.appendChild(titulo);
 	titulo.appendChild(lista);
 	caja2.appendChild(tarj);
 	caja2.appendChild(boton);
 	boton.appendChild(txt2);
 });
 