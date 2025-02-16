// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = []

/* 💥💥💥💥💥💥 VARIABLES 💥💥💥💥💥💥 */
const $ = element => document.querySelector(element);
$inputAmigo = $("#amigo")


/* 💥💥💥💥💥💥 FUNCION LIMPIAR CAMPO💥💥💥💥💥💥 */
function limpiarCampo () {
  $inputAmigo.value = ""
}


/* 💥💥💥💥💥💥 FUNCION MANEJO DOM 💥💥💥💥💥💥 */
function agregarAmigo () {
  const nombreIngresado = $inputAmigo.value.trim().replace(/\s+/g, " ")
  limpiarCampo()
  
  if(nombreIngresado === "") {
    alert("Por favor, ingrese un nombre.")
  } else {
    actualizarArray (nombreIngresado)
  }  

}

/* 💥💥💥💥💥💥 FUNCION ACTUALIZAR DATOS (ARRAY) 💥💥💥💥💥💥 */
function actualizarArray (nombreIngresado) {
  arrayAmigos.push(nombreIngresado)
  console.log(arrayAmigos)
  
}