/* 1. Dada uma lista de números, retorne a soma de todos os números. */

const numeros = [10, 20];

let total = numeros.reduce((total, item) => {
    return total + item;
})

console.log('Esta é a soma total do seu array: ' + total);


