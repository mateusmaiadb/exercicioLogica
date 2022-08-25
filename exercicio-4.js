/* 4. Dada uma lista de bibliotecas, retorne:
 "A", se o total de livros for maior ou igual a 1 e menor que 10
 "B", se o total for maior ou igual a 10 e menor que 20
 "C" se o número for maior ou igual 20 e menor que 30
 "Z", se o número for igual a 0 */

let lista = ['A', 'B', 'C','Z'];

function verificaCondicao(){
    switch(lista){
        case 'A':
            mensagem = console.log(" total de livros for maior ou igual a 1 e menor que 10");
            break;
        case 'B':
            mensagem = console.log("total for maior ou igual a 10 e menor que 20");
            break;
        case 'C':
            mensagem = console.log("o número for maior ou igual 20 e menor que 30");
            break;
        case 'Z':
            mensagem = console.log("o número for igual a 0");
        
        default:
            console.log();
    }
}