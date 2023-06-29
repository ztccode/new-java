let num = [5, 8, 2, 9, 3];
num[3] = 6;
num.push(7); //Adiciona um elemento a ultima posição do vetor
num.length; //Numero de posições de um vetor
num.sort(); //Organiza um vetor em ordem crescente

console.log(`Nosso vetor é ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor da do vetor é ${num[0]}`);
let pos = num.indexOf(8);
if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor 8 esta na posição ${pos}`);
}
