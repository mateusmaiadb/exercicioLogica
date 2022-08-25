/* 5. Imagine que você é uma pessoa capitã de um barco e você precisa calcular se a sua viagem será bem sucedida. Você tem dois parâmetros numéricos inteiros, ouro e 
piratas. Você terá sucesso na viagem se a quantidade de ouro for maior que a 
quantidade de piratas. Mas se a soma de ouro e piratas for maior que 100, o navio 
afunda. Retorne true se a viagem tiver sucesso e false se falhar */

function pulaLinha(){
    document.write("<br>")
}

function returnValue(ouro, piratas) {

    soma = ouro + piratas;

    if(ouro > piratas){
        return true
    }else if(soma > 100){
        return false
    }else{
        return false;
    }
}

document.write(returnValue(100,20))

