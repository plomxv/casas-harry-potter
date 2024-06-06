const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual você acha mais difícil lidar?",
        alternativas: [
            {
                texto: "Solidão",
                afirmacao: "Lufa lufa"
            },
            {
                texto: "Tédio",
                afirmacao: "Grifinória"
            },
            {
                texto: "Ser ignorado",
                afirmacao: "Sonserina"
            },
            {
                texto: "Fome",
                afirmacao: "Corvinal"
            }            
        ]
    },
    {
        enunciado: "O que você mais deseja aprender em hogwarts?",
        alternativas: [
            {
                texto: "Voar em uma vassoura",
                afirmacao: "Grifinória"
            },
            {
                texto: "Tudo sobre criaturas mágicas",
                afirmacao: "Lufa lufa"
            },
            {
                texto: "Segredos do castelo",
                afirmacao: "Corvinal"
            },
            {
                texto: "Feitiços",
                afirmacao: "Sonserina"
            }            
        ]
    },
    {
        enunciado: "Em um jardim encantado, o que você iria examinar primeiro?",
        alternativas: [
            {
                texto: "Árvore de folhas prateadas",
                afirmacao: "Sonserina"
            },
            {
                texto: "Piscina borbulhantes",
                afirmacao: "Grifinória"
            },
            {
                texto: "Estátua de um velho bruxo",
                afirmacao: "Corvinal"
            },
            {
                texto: "Cogumelos vermelhos que conversam entre si",
                afirmacao: "Lufa lufa"
            }
        ]
    },
    {
        enunciado: "O que você odeia que te chamem?",
        alternativas: [
            {
                texto: "Covarde",
                afirmacao: "Grifinória"
            },
            {
                texto: "Egoísta",
                afirmacao: "Lufa lufa"
            },
            {
                texto: "Ordinário",
                afirmacao: "Sonserina"
            },
            {
                texto: "Ignorante",
                afirmacao: "Corvinal"
            }
        ]
    },
    {
        enunciado: "Qual estrada mais te atenta?",
        alternativas: [
            {
                texto: "Rua de paralelepípedo com estátuas antigas",
                afirmacao: "Corvinal"
            },
            {
                texto: "Caminho sinuoso e coberto pela floresta",
                afirmacao: "Lufa lufa"
            },
            {
                texto: "Beco estreito, escuro com o fim iluminado",
                afirmacao: "Sonserina"
            },
            {
                texto: "Rua larga, ensolarada e com grama",
                afirmacao: "Grifinória"
            }
        ]
    },
    {
        enunciado: "Você está em uma feira mágica e se depara com quatro poções brilhantes em uma mesa. Cada poção tem uma cor diferente: uma é vermelha como rubis, outra é verde como esmeraldas, a terceira é azul como safiras e a última é roxa como ametistas. Qual poção você escolhe experimentar primeiro e por quê?",
        alternativas: [
            {
                texto: "Decido experimentar a poção azul como safiras, pois sou fascinado pela calma e serenidade que a cor azul transmite",
                afirmacao: "Corvinal"
            },
            {
                texto: "Opto pela poção verde como esmeraldas, pois me sinto conectado à natureza e à renovação que a cor verde simboliza",
                afirmacao: "Lufa lufa"
            },
            {
                texto: "Escolho a poção roxa como ametista, pois gosto da mística e da sabedoria associadas à cor roxa",
                afirmacao: "Sonserina"
            },
            {
                texto: "Escolho a poção vermelha como rubis, pois me sinto atraído pela bravura e paixão associadas à cor vermelha",
                afirmacao: "Grifinória"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua casa é...";
    const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
    textoResultado.textContent = afimMaisEscolhida;
    caixaAlternativas.textContent = "";
}

