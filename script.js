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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua casa é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
