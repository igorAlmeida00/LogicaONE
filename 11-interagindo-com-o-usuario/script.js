/* const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

function desenhaBola(event) {
  let x = event.pageX - tela.offsetLeft;
  let y = event.pageY - tela.offsetTop;

  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();

  console.log(`X=${x}, Y=${y}`);
}

tela.onclick = desenhaBola; */

// === === === Ex01 === === === //
// ========== SHIFT ========== //
/*const tela = document.querySelector('canvas');
  const pincel = tela.getContext('2d');
  pincel.fillStyle = 'white';
  pincel.fillRect(0, 0, 600, 400);

  function desenhaCirculo(evento) {
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    let raio = 10;
    console.log(x + ',' + y);
    if (evento.shiftKey) {
      raio = raio + 20; // raio agora passa a valer 30!
    }
      pincel.fillStyle = 'black';
      pincel.beginPath();
      pincel.arc(x, y, raio, 0, 2 * 3.14);
      pincel.fill();
    }

    tela.onclick = desenhaCirculo;*/
    
// === === === === Ex02 === === === === //
// ============== Desenho ============= //
/*const paleta = document.querySelector('input');
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);
let desenha = false;

function desenhaCirculo(evento) {
  if(desenha) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = paleta.value; // sempre pega o valor atual da paleta!
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
  }
  console.log(x + ',' + y);
}

tela.onmousemove = desenhaCirculo;
// atribuindo diretamente a função anônima
tela.onmousedown = function() {
  desenha = true;
}
// atribuindo diretamente a função anônima
tela.onmouseup = function() {
  desenha = false;
}*/

// === === === === Ex03 === === === === //
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);
var raio = 10;

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

desenhaCirculo(300,200, raio + 20, 'red');
desenhaCirculo(300,200, raio + 10, 'white');
desenhaCirculo(300,200, raio, 'red');

function dispara(evento) {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;

  if ((x > 300 - raio) && (x < 300 + raio)
  && (y > 200 - raio) && (y < 200 + raio)) {
    alert('Acertou');
  }
}

tela.onclick = dispara;

