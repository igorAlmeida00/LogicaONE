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

  if(imc > 35) {
    console.log(`Seun indice IMC esta acima da recomendaco da OMS`)
  } else if(imc < 18.5) {
    console.log(`Seu indice IMC esta abaixo da recoemndacao da OMS.`)
  } else {
    console.log(`PARABENS! Seu IMC esta dentro do recomentado.`)
  }

  return imc;
}

mostra(calculaImc(peso, altura));