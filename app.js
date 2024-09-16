let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
    } else if (chute == '') {
        exibirTextoNaTela('p', 'Adicione um número secreto válido!');
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
    limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
    
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}












// function recebeNome(nome) {
//     console.log(`Olá, ${nome}`);
// }

// recebeNome("John");

// function calcularDobro (numero) {
//    return numero * 2; 
// }

// let resultadoDoDobro = calcularDobro(5);
// console.log(resultadoDoDobro);


// function calcularMedia (a, b, c) {
//     return (a + b + c) / 3;
// }

// let media = calcularMedia(8, 9, 15);
// console.log(media);

// function encontrarMaior(a, b) {
//     return a > b ? a : b;
// }

// let maiorNumero = encontrarMaior(7 , 15);
// console.log(maiorNumero);

// function quadrado(numero) {
//     return numero * numero;
// }

// let resultado = quadrado(50)
// console.log(resultado);


// calculadora de dolar!

// function calcularDolarParaReal (valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2)
// }

// let valorEmDolar = 50;
// let valorEmReais = calcularDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dorales equivalem a R$${valorEmReais}`);

// Desafio de listas 
// let listaGenerica = [];
// let linguagensDeProgramação = ['JavaScript','C','C++','Kotlin','Python'];

// linguagensDeProgramação.push( 'Java','Ruby','GoLang');
// console.log(linguagensDeProgramação[7]);
