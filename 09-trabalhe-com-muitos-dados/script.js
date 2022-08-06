let input = document.querySelector("input");
input.focus();
let button = document.querySelector("button");
button.onclick = verifica;

function sorteia() {
  return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {
  let segredos = [];
  let numero = 1;
  while(numero <= quantidade) {
    let numeroAleatorio = sorteia();
    let achou = false;
    if (numeroAleatorio !== 0) {
      for(var posicao = 0; posicao < segredos.length; posicao++) {
        if(segredos[posicao] == numeroAleatorio){
          achou = true;
          break;
        }
      }
      if (achou == false) {
        segredos.push(numeroAleatorio);
        numero++;
      }
    }
  }
  return segredos;
}

let segredos = sorteiaNumeros(3);
console.log(segredos);

function verifica() {
  var achou = false;
  for(var posicao = 0; posicao < segredos.length; posicao++) {
    if(input.value == segredos[posicao]) {
      alert("Você ACERTOU!");
      achou = true;
      break;
    } 
  }

  if(achou == false) {
    alert("Você ERROU!");
  }
  input.value = "";
  input.focus();
}

// === === Não existe ingrediente repetido aqui! === === //
/*let ingredientes = [];
let quantidade = Number(prompt("Quantos ingredientes você vai adicionar?"));
let contador = 1;

while(contador <= quantidade) {
  let ingrediente = prompt("Informe o ingrediente " + contador);
  let existe = false;
  for(posicao = 0; posicao < ingredientes.length; posicao++) {
    if(ingredientes[posicao] == ingrediente) {
      existe = true;
      break;
    }
  }

  if(existe == false) {
    ingredientes.push(ingrediente);
    contador++;
  }
}

console.log(ingredientes);*/