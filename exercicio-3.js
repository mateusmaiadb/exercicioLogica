/* 3. Dada uma lista de 3 notas, calcule a média simples e, caso a média seja maior ou 
igual a 7, retorne "Aluno aprovado :)", se for menor que 7, retorne "Aluno reprovado :(" */

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;

let mediaDasNotas = (nota1 + nota2 + nota3) / 3 ;

function calculoMedia() {
    if (mediaDasNotas >= 7) {
        document.write('Aluno aprovado :)');
    }else{
        document.write('Aluno reprovado :(');
    }
}

console.log(calculoMedia());