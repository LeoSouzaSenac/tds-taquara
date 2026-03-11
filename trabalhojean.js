function ligarDesligar(carro, acao) {

    if (acao === "ligar") {
        console.log("Ligando o " + carro);
    } 
    
    else if (acao === "desligar") {
        console.log("Desligando o " + carro);
    } 
    
    else {
        console.log("eu não consegui " + carro);
    }

}

ligarDesligar("carro", "ligar");
ligarDesligar("carro", "desligar");
 