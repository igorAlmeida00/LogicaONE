let secret = Math.round(Math.random() * 10);

let input = document.querySelector("input");
let btn = document.querySelector("button");
input.focus();

function verificar() {
  if(input.value == secret) {
    alert("vc acertou"); 
  } else {
    alert("vc errou");
  }
  input.value = "";
  input.focus();
}

btn.onclick = verificar;