function mostra(frase) {
  console.log(frase);
}

/*let limite = Number(prompt("Informe a data limite:"));
let anoCopa = 1930;

while(anoCopa <= limite) {
  console.log(`Teve copa em ${anoCopa}`)
  anoCopa = anoCopa + 4;
}*/


// === === === Ex01 === === === //
/*let par = 0;

while(par <= 100) {
  mostra(par);
  par = par + 2;
}

mostra("FIM");*/

// === === === Ex02 === === === //
/*let numero = 29;

while(numero < 40) {
  numero++;
  if(numero == 33 && numero == 37) {
    mostra(numero + 1)
  } else {
    mostra(numero);
  }
}*/

// === === === Ex03 === === === //
/*let num = 21;

while(num >= 1) {
  num--;
  mostra(num);
}*/

// === === === Ex04 === === === //
/*let login = "fulano06";
let password = "123456@";
let tentativaMin = 1;
let tentativaMax = 3;

while(tentativaMin <= tentativaMax) {
  let loginInformado = prompt("Informe o login:");
  let passwordInformado = prompt("Informe a senha:");
  
  if(login == loginInformado && password == passwordInformado) {
    alert(`Bem-vindo ao sistema ${login}`);
      tentativaMin == tentativaMax
  } else if(login !== loginInformado || password !== passwordInformado) {
    alert("Senha ou Login e inválida. Tente novamente");
      tentativaMin !== tentativaMax
  } else{
    alert("Excedeu o numero de tentativas");
      tentativaMin == 3;
  }
    tentativaMin++
} */

/*let login = "fulano06";
let password = "123456@";
let tentativaMin = 1;
let tentativaMax = 3;

while(tentativaMin <= tentativaMax) {
  let loginInformado = prompt("Informe o login:");
  let passwordInformado = prompt("Informe a senha:");
  
  if(login == loginInformado && password == passwordInformado) {
    alert(`Bem-vindo ao sistema ${login}`);
      tentativaMin = tentativaMax;
  } else{
    if(tentativaMin == 3) {
      alert("Excedeu o numero de tentativas");
    } else {
      alert("Senha ou Login e inválida. Tente novamente");
    }
  } 
    tentativaMin++
}*/

// === === === NAN === === === //
/*var idade = parseInt(prompt("Digite sua idade"));

while( isNaN(idade) ) {
    idade = parseInt(prompt("Digite sua idade"));    
}

alert(idade);*/

// === === === TABUADA === === === //
/* let numb = Number(prompt("Informe um numero"));
let mult = 1;

while(mult <= 10) {
  let resultado = numb * mult;
  mostra(`${numb} x ${mult} = ${resultado}`)
  mult++
} */

/*let numb = Number(prompt("Informe um numero"));

for(mult = 1; mult <= 10; mult++) {
  let resultado = numb * mult;
  mostra(`${numb} x ${mult} = ${resultado}`)
}*/

// === === === Ex05 === === === //
/*for( var i = 0; i < 10; i++ ) {
  alert( "O resultado é " + (2 * i) );
}

let index = 0;
while(index < 10) {
  alert("O resultado é " + (2 * i));
  index++
}*/

// === === === Media === === === //

/*let familiares = Number(prompt("Quantidade de familiares"));
let nummero = 1;
let total = 0;

while(nummero <= familiares) {
  let idade = Number(prompt("Informe a idade do membro"));
  total = total + idade;
  nummero++
}

let media = total/familiares;
mostra(`A media das idades e: ${media}`);*/

// === ==== === Interrompendo uma repetição === === === //
let numeroPensado = Math.round(Math.random() * 10);
let tentativas = 1;

while(tentativas <= 3) {
    let chute = parseInt(prompt("Digite seu chute!"));
    if(chute == numeroPensado) {
        mostra("Você ACERTOU, o número pensado era " + numeroPensado);
        break;
    } else {
        mostra("Você ERROU!");
    }
    tentativas++;
}

mostra("FIM");

// === === === loop dentro de loop ==== === === //
function pulaLinha() {
  document.write("<br>");
}

for(linha = 1; linha <= 3; linha++) {

  for(coluna = 1; coluna <= 10; coluna++) {
    document.write("*");
  }
  pulaLinha();
}

/*Aprendemos a utilizar parseInt() para converter um texto em número. 
Certo? Contudo, ele converte um texto para um número inteiro e nem 
sempre queremos abdicar dos números decimais. Vejamos um exemplo: 
      let numero = parseInt("12.13");
O valor de numero será 12. Para que as casas decimais sejam 
mantidas, usamos o parseFloat():
      var numero = parseFloat("12.13");
O valor de numero será 12.13.*/