const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

/*desenhaCirculo(20, 20, 10);
function exibeMensagem() {
  console.log('Chamei funcao')
}

let x = 20;
let final = 600;
function atualizaTela() {
  limpaTela();
  if(x > 600) {
    final = -1
  } else if(x < 0){
    final = 1;
  }

  desenhaCirculo(x, 20, 10, 'black');
  x = x + final
}

setInterval(atualizaTela, 10);*/

// === === === === Pulsar === === === === //
/*let raio = 19;
let fatorCrescimento = 0;

function atualizaTela() {
  limpaTela();
  if(raio > 30) {
      fatorCrescimento = -1;
  } else if (raio < 20) {
      fatorCrescimento = 1;
  }

  raio = raio + fatorCrescimento;
  desenhaCirculo(300, 200, raio, 'black');
}

setInterval(atualizaTela, 40);*/

// === === Movendo pelo teclado === === //
// códigos do teclado //
const esquerda = 37
const cima = 38
const direita = 39
const baixo = 40
const taxa = 10;

let x = 20;
let y = 20;

function desenhaCirculo(x, y, raio) {
  pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {
  limpaTela();
  desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function leDoTeclado(evento) {
  if(evento.keyCode == cima) {
    y = y - taxa;
  } else if (evento.keyCode == baixo) {
    y = y + taxa;
  } else if (evento.keyCode == esquerda) {
    x = x - taxa;
  } else if (evento.keyCode == direita) {
    x = x + taxa;
  }
}

document.onkeydown = leDoTeclado;




