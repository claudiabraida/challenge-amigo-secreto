// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* 💥💥💥💥💥💥 VARIABLES 💥💥💥💥💥💥 */
const $ = element => document.querySelector(element);
$inputAmigo = $("#amigo")
$ulListaAmigos = $("#listaAmigos")

/* 💥💥💥💥💥💥 FUNCION LIMPIAR CAMPO💥💥💥💥💥💥 */
function limpiarCampo () {
  $inputAmigo.value = ""
}

/* 💥💥💥💥💥💥 FUNCION VACIAR PARA ACTUALIZAR LISTA 💥💥💥💥💥💥 */
function vaciarListaYactualizar () {
  $ulListaAmigos.innerHTML = ""
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

/* 💥💥💥💥💥💥 FUNCION ELEMENTO LI 💥💥💥💥💥💥 */
function elementoLi (nombreAmigo) {
  let elementoLi = document.createElement("li")
  elementoLi.innerText= nombreAmigo
  $ulListaAmigos.appendChild(elementoLi)
}

/* 💥💥💥💥💥💥 FUNCION ACTUALIZAR DATOS (ARRAY) 💥💥💥💥💥💥 */
let arrayAmigos = []

function actualizarArray (nombreIngresado) {
  arrayAmigos.push(nombreIngresado)
  console.log(arrayAmigos)
  vaciarListaYactualizar()
  recorrerArrayAmigos()
}

/* 💥💥💥💥💥💥 FUNCION RECORRER ARRAY Y AGREGAR ELEMENTO LI 💥💥💥💥💥💥 */
function recorrerArrayAmigos () {
  for (let i = 0; i < arrayAmigos.length; i++) {
    let nombreAmigo = arrayAmigos[i]
    elementoLi(nombreAmigo)
  }
}