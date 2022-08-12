// O (Y) comanda a altura.
// O (X) comanda a largura.

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

// Fundo do quadro
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

// Parte pintada
pincel.fillStyle = 'green';
pincel.fillRect(10, 10, 580, 380);

// Parte de cima
pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 20);
pincel.lineTo(20, 200);
pincel.lineTo(580, 200);
pincel.fill();

// Parte de baixo
pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 380);
pincel.lineTo(20, 200);
pincel.lineTo(580, 200);
pincel.fill();

// Circulo interno
pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();


















