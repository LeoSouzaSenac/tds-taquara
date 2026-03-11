let a = 10;
let b = 10;

function substituir(){
  let valor1 = a;
  let valor2 = b;
  a = valor2;
  b = valor1;
}

substituir();

console.log(a, b)
