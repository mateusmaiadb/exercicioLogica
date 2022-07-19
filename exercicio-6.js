console.log(triangulo(5));

function triangulo(linhas) {
    for (let linha = 0; linha <= linhas; linha++) {
        let padrao = '*';
        for (let i = 0; i < linha; i++) {
            padrao += '*';  
        }
        console.log(padrao);
        
    }
}
