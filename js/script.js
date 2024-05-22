// constantes
const LAVADODEPLACA = 10000;
const CAMBIOMODULO = 5000;
const CAMBIOPIN = 3000;
const FLASHEO = 3000;



// necesito pedirle informacion al usuario para que el me mande un mensaje
let ingreseSuNombre = prompt("ingrese su nombre y apellido");
let ingreseSuCorreo = prompt ("ingrese un correo para contactarlo");
let VACIO="";

// si el usuario ingresa el nombre y su correo para mandarme un mensaje o dejarme su contacto
if (ingreseSuNombre != VACIO && ingreseSuCorreo != VACIO) {
    alert ("nombre ingresado :" + ingreseSuNombre);
    alert ("correo ingresado: " + ingreseSuCorreo);
} else {
    alert ("debe llenar los campos!");
};

// va a haber una seccion donde se consulta el precio de reparacion de piezas de celulares
let consulta = prompt ("Sobre que reparacion quieres consultar");

if ( consulta == 1){
    alert ("usted ha consultado sobre lavado de placa, su valor es: " + LAVADODEPLACA);
} else if (consulta ==2){
    alert ("usted ha consultado sobre cambio de modulo, el valor es:" + CAMBIOMODULO);
} else if (consulta ==3){
    alert("usted ha consultado sobre cambio de PIN, su valor es: " + CAMBIOPIN);
} else if (consulta == 4){
    alert ("usted ha consultado sobre flasheo, su valor es: " + FLASHEO);
};




