let numeroSecreto = 4;
//chamar qual será o numero secreto

let tentativas = 3;
//numero de tentativas que poderá ser feitas

//wilhe é o laço de repetição que usa () no qual é as tentativas 
while (tentativas > 0){
    let chute = parseInt(prompt("Digite um número entre 0 e 10: "));
 //mensagem para digitar o numero

if(chute == numeroSecreto){
    alert("Parabéns, você acertou!");
    //mensagem de acerto, chute for igual ao numero secreto
    break;
    //break é a quebra do laço assim se a pessoa acertaer de primeira ela não terá que fazer denovo
}else if(numeroSecreto > chute){
    alert("O número secreto é maior que o chute");
    //mensagem para se o chute foi errado
    tentativas = tentativas - 1;
    //contagem de -1 tentativa caso errar, assim ira perdendo as tentativas das 3
}else if(numeroSecreto < chute){
    alert("O número secreto é menor que o chute");
    tentativas = tentativas - 1
}
}