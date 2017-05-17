 var nuevaTarea = document.getElementById("nueva-tarea");
 var contenedor = document.getElementById("contenedor");

 nuevaTarea.addEventListener("click", function(){

 	var caja = document.createElement('div');
	var entrada = document.createElement('input');
	var boton = document.createElement('button');
	var texto = document.createTextNode("Añadir tarea");

	caja.appendChild(entrada);
	caja.appendChild(boton);
	contenedor.appendChild(caja);
	boton.appendChild(texto);
	
});

 