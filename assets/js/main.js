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
 	var caja2 = document.createElement('div');
 	var tarj = document.createElement('textArea');
 		tarj.setAttribute("placeholder","Añadir tarjeta");
 	var boton = document.createElement('button');
 	var txt2 = document.createTextNode('Añadir');
 	entrada.value;

 	caja.appendChild(entrada);

 	caja.appendChild(caja2);
 	caja2.appendChild(tarj);
 	caja2.appendChild(boton);
 	boton.appendChild(txt2);
 });
 