/*let peso = 100;
let altura = 1.75;
let imc = Math.round(peso / (altura * altura));

mostra(`Seu IMC e: ${imc}`);*/

function mostra(frase) {
  console.log(frase);
};

let nome = prompt("informe o seu nome:")
let peso = Number(prompt(`${nome}, informe o seu peso:`));
let altura = Number(prompt(`${nome}, informe a sua altura:`));

function calculaImc(peso, altura) {
  let imc = Math.round(peso / (altura * altura));

  if(imc > 30) {
    console.log(`Voce esta acima do peso`)
  } else if(imc < 18) {
    console.log(`Voce esta abaixo do peso`)
  } else {
    console.log(`Parabens voce esta muito bem`)
  }

  return imc;
}

mostra(calculaImc(peso, altura));