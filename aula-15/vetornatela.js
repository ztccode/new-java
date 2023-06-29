let valores = [8, 1, 7, 4, 2, 9];
valores.sort();
console.log(valores);

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

for (let pos in valores) {
  console.log(`A posição de ${pos} tem o valor ${valores[pos]}`);
}

///////////////////////////////////////////////////////////////////////////////

let vetor = [0, 1, 2, 3, 4, 5];
console.log(vetor);
for (let p in vetor) {
  console.log(`A posição de ${p} tem o valor ${vetor[p]}`);
}
 