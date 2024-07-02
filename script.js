const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaPerguntas = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado = document.querySelector(".caixa-resultado") ;
const textoResultado = document.querySelector(".texto-resultado") ;
const perguntas =[
    {
        enunciado : "No Brasil, em 2022, a média nacional apontou que 31,2% dos adolescentes estavam com excesso de peso. Qual o primeiro pensamento?",
        alternativas : [
            "Isso é preocupante!",
            "Isso é bom!"
        ]
    },
    {
        enunciado : "As estratégias de gamificação podem ser implementadas para conscientizar adolescentes sobre a adoção de práticas sustentáveis, como o uso de energia renovável, enquanto também incentivam hábitos saudáveis para combater a obesidade na adolescência?",
        alternativas : [
            "É  importante a utilização de estratégias de gamificação, tais como: plataformas no ambiente escolar.",
            "A utilização de estratégias de gamificação não seriam eficazes para conscientizar os alunos."
        ]
    },
    {
        enunciado : "QUAL A IMPORTÂNCIA DAS ENERGIAS RENOVÁVEIS PARA O MUNDO?",
        alternativas : [
            "É MUITO IMPORTANTE PARA O MUNDO ATUAL.",
            "NÃO TEM TANTA IMPORT NCIA ASSIM."
        ]
    }
] ;

let atual = 0 ;
let perguntaAtual ;

function mostraPergunta(){
    perguntaAtual = perguntas[atual].enunciado ;
    caixaPerguntas.textContent = perguntaAtual ;
};

mostraPergunta() ;


