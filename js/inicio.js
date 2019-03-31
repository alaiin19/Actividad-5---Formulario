window.onload=iniciar();

function iniciar(){
	misCookies = document.cookie; //Almacenamos todas las cookies en la variable misCookies.
	listaCookies = misCookies.split(";"); //Convertimos a listaCookies en un array con todas las cookies almacenadas en misCookies
	for(i in listaCookies){ //Creamos un bucle en el que se buscara la cookie
		busca = listaCookies[i].search("Usuario"); //Buscamos la cookie Usuario en el array listaCookies, si lo encuentra se almacenara en la variable busca.
		if (busca > -1){ //Si encuentra la cookie guarda el par clave=valor en la variable miCookie.
			window.location='Bienvenido.html'; //Si encuentra la cookie, redirige a bienvenido.html.
		}else{
			window.location='Registro.html'; //Si no encuentra la cookie, busca tendra el valor -1 por lo que redirige a registro.html.
		}
	}
}