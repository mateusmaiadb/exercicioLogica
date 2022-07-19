//Dada uma lista de 3 notas, calcule a média simples e, caso a média seja maior ou 
//igual a 7, retorne "Aluno aprovado :)", se for menor que 7, retorne "Aluno reprovado :(" 

let mediaNotas = [6, 7, 7];

let soma = 0;

for (let i = 0; i < mediaNotas.length; i++) {

    let numero = mediaNotas[i];

    soma = soma + numero;
}

let media = soma / mediaNotas.length;

if (media > 7) {
    console.log('Aluno aprovado :) Sua nota é: ' + media);
} else {
    console.log('Aluno reprovado :( Sua nota foi: ' + media);
}