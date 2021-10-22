'use strick'

window.onload = iniciar
let mapa = null

function iniciar() {
  mapa = document.getElementById('imgMapa')
  //img.onclick = namejadorClick -> Lo más recomendable
  //img.addEventListener('click', namejadorClick) //Spara librerias o para varios eventos
  //img.addEventListener('click', namejadorClick2)
  mapa.onclick = ponerSeta
  //mapa.oncontextmenu = quitarSeta
  //mapa.addEventListener('contextmenu', quitarSeta)

}

function ponerSeta(evento) {
  console.log(evento)
  //let seta = document.getElementById('setaPrueba')
  let seta = document.createElement('img')
  seta.setAttribute('src', './img/seta.png')
  seta.classList.add('seta')
  seta.style.top = `${evento.clientY - 25}px`
  seta.style.left = `${evento.clientX - 25}px`
  seta.oncontextmenu = quitarSeta
  let body = document.getElementsByTagName('body')[0]
  body.appendChild(seta)
}

function quitarSeta(evento) {
  //console.log(evento)
  evento.target.remove()
  evento.stopPropagation()
  evento.preventDefault()
}
