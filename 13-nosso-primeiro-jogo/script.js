// === === === game === === === //
/*const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

let raio = 10;
let xAleatorio;
let yAleatorio;

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {
  desenhaCirculo(x, y, raio+20, 'red');
  desenhaCirculo(x, y, raio+10, 'white');
  desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {
  return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
  limpaTela();
  xAleatorio = sorteiaPosicao(600);
  yAleatorio = sorteiaPosicao(400);
  desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 1000);

function dispara(event) {
  let x = event.pageX - tela.offsetLeft;
  let y = event.pageY - tela.offsetTop;
  
  if((x > xAleatorio - raio) && (x < xAleatorio + raio) 
  && (y > yAleatorio - raio) && (y < yAleatorio + raio)) {
    alert('Acertou!!')
  }
}

tela.onclick = dispara;*/

// === === === === === Paint === === === === === //
function desenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor;
  pincel.fillRect(x, y, tamanho, tamanho)
  pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaPaletaDeCores() {
  desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
  desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
  desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');
}

function lidaComMovimentoDoMouse(evento) {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;

  if(desenha) {
    desenhaCirculo(x, y, 5, corAtual);
  }
}

function habilitaDesenhar() {
  desenha = true;
}

function desabilitaDesenhar() {
  desenha = false;
}

function selecionaCor(evento) {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;
  // cada condição muda a variável `corAtual`
  // começamos pela condição do y que é igual em todos os casos
  if (y > yQuadrados && y < yQuadrados + tamanhoQuadrados) {
    if (x > xVermelho && x < xVermelho + tamanhoQuadrados) {
      corAtual = 'red';
    } else if (x > xVerde && x < xVerde + tamanhoQuadrados) {
      corAtual = 'green';
    } else if (x > xAzul && x < xAzul + tamanhoQuadrados) {
      corAtual = 'blue';
    }
  }
}

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

let desenha = false;
let corAtual = 'blue';
let xVermelho = 0;
let xVerde  = 50;
let xAzul = 100;
let yQuadrados = 0;
let tamanhoQuadrados = 50;

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse;
tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;
tela.onclick = selecionaCor;


