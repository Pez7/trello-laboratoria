var nuevaTarea = document.getElementById("nueva-tarea");
var contenedor = document.getElementById("contenedor");
var caja = document.createElement('div');
var entrada = document.createElement('input');
var boton = document.createElement('button');

 nuevaTarea.addEventListener("click", function(){
	/*var txt1 = document.createTextNode("")*/
	var txt = document.createTextNode("Añadir tarea");

	caja.appendChild(entrada);
	caja.appendChild(boton);
	contenedor.appendChild(caja);
	boton.appendChild(txt);

});

 boton.setAttribute("id","agregaTarea");

 var agrTarea = document.getElementById("agregarTarea");

 	agrTarea.addEventListener("click", function(){
 		alert("Hola Mundo");

 });
 entrada.value;

 