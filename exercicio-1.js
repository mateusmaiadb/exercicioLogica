//Dada uma lista de números, retorne a soma de todos os números.

//array criado
const lista = [10, 20];
//variavel que receberá o total
let soma = 0;
//percorre o array 
for(let i = 0; i < lista.length; i++){
    //soma o total do array lista
    soma += lista[i]
}

console.log('Esta é a soma total do seu array: ' + soma);


