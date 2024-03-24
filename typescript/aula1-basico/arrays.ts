// push() adiciona um ou mais elementos no final do array e retorna o tamanho
// pop() remove e retorna o último elemento
// unshift() adiciona um ou mais elementos no início array e retorna o tamanho
// shift() remove e retorna o primeiro elemento do array

const arr1: number[] = [];

console.log("Tamanho do array:", arr1.push(1));
console.log("Tamanho do array:", arr1.push(2));

console.log("Conteúdo do array:", arr1);

console.log("Tamanho do array:", arr1.unshift(3));
console.log("Tamanho do array:", arr1.unshift(4));

console.log("Conteúdo do array:", arr1);

console.log("Elemento removido do array:", arr1.pop());

console.log("Conteúdo do array:", arr1);

console.log("Elemento removido do array:", arr1.shift());

console.log("Conteúdo do array:", arr1);
