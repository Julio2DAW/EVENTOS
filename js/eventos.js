'use strick'

window.onload = iniciar

function iniciar() {
  let img = document.getElementsByTagName('img')[0]
  //img.onclick = namejadorClick
  img.addEventListener('click', namejadorClick)
  img.addEventListener('click', namejadorClick2)
}

function namejadorClick() {
  console.log('TRON')
}
function namejadorClick2() {
  console.log('TRON2')
}
