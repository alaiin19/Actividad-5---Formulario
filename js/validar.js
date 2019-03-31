window.onload=iniciar;

function iniciar()
	{
	document.getElementById("enviar").addEventListener('click',asignar,false);
	document.getElementById("enviar").addEventListener('click',comprobarNombre,false);
	document.getElementById("enviar").addEventListener('click',comprobarApellidos,false);
	document.getElementById("enviar").addEventListener('click',comprobarCorreo,false);
	document.getElementById("enviar").addEventListener('click',comprobarContrasena,false);
	document.getElementById("enviar").addEventListener('click',comprobarConfirmar,false);
	document.getElementById("enviar").addEventListener('click',comprobarCondiciones,false);
	document.getElementById("enviar").addEventListener('click',crearCookie,false);
	}
	

function asignar(){
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	contraseña = document.getElementById("contrasena").value;
	confirmar = document.getElementById("confirmar").value;
	cookie = 0;
}
	
function comprobarNombre(){
	if(nombre === ""){
		alert("El campo nombre no puede estar vacio");
	}else {
		cookie = cookie + 1;
	}
}

function comprobarApellidos(){
	if(apellidos === ""){
		alert("El campo apellidos no puede estar vacio");
	}else {
		cookie = cookie + 1;
	}
}

function comprobarCorreo(){
	if(correo === ""){
		alert("El campo correo no puede estar vacio");
	}else {
		cookie = cookie + 1;
	}
}

function comprobarContrasena(){
	//con [A-Z]+ comprobamos que al menos haya 1 mayuscula en la contraseña.
	//con [a-z]+ comprobamos que la menos haya 1 minuscula en la contraseña.
	//con \d+ comprobamos que al menos haya 1 numero en la contraseña.
	//con if(contraseña.length < 8) comprobamos que la contraseña tenga una longitud minima de 8 caracteres.
	var patron = /[A-Z]+[a-z]+\d+/;
	if(patron.test(contraseña)){
		if(contraseña.length < 8){
			alert("La contraseña debe de tener 8 caracteres o más")
		}else{
			if(contraseña === confirmar){
				cookie = cookie + 1;
			}else{
				alert("la contraseña debe ser igual que la confirmacion");
			}//FIN IF,ELSE que comprueba que la contraseña sea igual que la confirmacion.
		}//Fin IF,ELSE que comprueba la longitud de la contraseña.
	}else{
		alert("La contraseña debe de contener minimo 1 mayuscula, 1 minuscula y 1 número");
	}//Fin IF,ELSE que comprueba si hay mayusculas, minusculas y numeros.
}

function comprobarConfirmar(){
	if(confirmar === ""){
		alert("El campo confirmar contraseña no puede estar vacio");
	}else {
		cookie = cookie + 1;
	}
}

function comprobarCondiciones(){
	if(document.getElementById("Condiciones").checked){
		cookie = cookie + 1;
	}else{
		alert("Debe aceptar las condiciones");
	}
}

function crearCookie(){
	if(cookie === 6){
		document.cookie="Usuario="+nombre;
		window.location='Bienvenido.html';
	}else{
		cookie = 0;
	}
}