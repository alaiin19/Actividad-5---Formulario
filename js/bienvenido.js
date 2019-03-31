window.onload=iniciar();

function iniciar(){
	misCookies = document.cookie; //Almacenamos todas las cookies en la variable misCookies.
	listaCookies = misCookies.split(";"); //Convertimos a listaCookies en un array con todas las cookies almacenadas en misCookies
	for(i in listaCookies){ //Creamos un bucle en el que se buscara la cookie
		busca = listaCookies[i].search("Usuario"); //Buscamos la cookie Usuario en el array listaCookies, si lo encuentra se almacenara en la variable busca.
		if (busca > -1){ //Si encuentra la cookie guarda el par clave=valor en la variable miCookie.
			miCookie=listaCookies[i];
			//alert(miCookie) contendria el texto Usuario=(nombre introducido).
		}else{
			alert("Error"); //Si no encuentra la cookie, busca tendra el valor -1 por lo que muestra este mensaje.
		}
	}
	igual = miCookie.indexOf("="); // Obtenemos la posicion del signo =, de forma que podemos separar la clave del valor.
	valor = miCookie.substring(igual+1); //Separamos el valor de la cadena del par clave=valor creando una subcadena almacenada en la variable valor.
	document.write('Bienvenido '+valor + '<br/>');
	document.write('<input type="button" onclick="cerrar()" name="Cerrar" id="Cerrar" value="Cerrar sesion"></input>');
}

function cerrar(){
	alert("Cerrando sesion...");
	nombre = "";
	document.cookie="Usuario="+nombre;
	window.location='Registro.html';
}