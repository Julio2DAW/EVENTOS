'use strick'

window.onload = iniciar
let mapa = null

function iniciar() {
  mapa = document.getElementById('imgMapa')
  //img.onclick = namejadorClick -> Lo más recomendable
  //img.addEventListener('click', namejadorClick) //para librerias o para varios eventos
  //img.addEventListener('click', namejadorClick2)
  mapa.onclick = ponerSeta
}

function ponerSeta() {
  console.log('En ponerSeta')
}
