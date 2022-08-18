function mostra(frase) {
  console.log(frase);
};

let vitorias = Number(prompt("Informe o numnero de vitorias:"));
let empates = Number(prompt("Informe o numnero de empates:"));

let pontos = (vitorias *3) + empates;

if(pontos < 28) {
  console.log(`Seu time esta pior que no ano passado. ${pontos} Pontos`);
} else if(pontos == 28) {
  console.log(`Seu time esta igual ao ano passado. ${pontos} Pontos`);
} else {
  console.log(`Seu time esta melhor do que no ano passado. ${pontos} Pontos`)
}

mostra(`Seu time esta com: ${pontos} Pontos`);

// === === === === === JOGO === === === === === // 

let numeroPensado = Math.round(Math.random() * 10);
let chute = Number(prompt(`Informe um numro:`));

if(chute == numeroPensado) {
  mostra(`PARABENS, voce acertou o numero.`)
} else {
  mostra(`Voce errou, o numero pensado foi ${numeroPensado}`)
}



