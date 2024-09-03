const caixaPrincipal    = document.querySelector(".caixa-principal") ;
const caixaPerguntas    = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado    = document.querySelector(".caixa-resultado") ;
const textoResultado    = document.querySelector(".texto-resultado") ;
const perguntas =[
    {
        enunciado : "No Brasil, em 2022, a média nacional apontou que 31,2% dos adolescentes estavam com excesso de peso. Qual o primeiro pensamento?",
        alternativas : [
            {
            texto: "Isso é preocupante!",
            afirmacao: "Ficou com receio de estar passando por essa situação." 
            },
            {
            texto: "Isso é bom!",
            afirmacao: "Pensou que pelo  menos agora os adolescentes não tem mais problemas para se alimentar."
            }    
        ]
    },
    {
        enunciado : "As estratégias de gamificação podem ser implementadas para conscientizar adolescentes sobre a adoção de práticas sustentáveis, como o uso de energia renovável, enquanto também incentivam hábitos saudáveis para combater a obesidade na adolescência?",
        alternativas : [
            {
            texto: "É  importante a utilização de estratégias de gamificação, tais como: plataformas no ambiente escolar.",
            afirmacao: "É um processo mais atraente  e estimula mudanças comportamentais ao integrar a aprendizagem com a aplicação prática do cotidiano do aluno e o uso de tecnologias."
            },
            {
            texto: "A utilização de estratégias de gamificação não seriam eficazes para conscientizar os alunos.",
            afirmacao: "Preocupado com que a abordagem possa simplificar questões complexas, reduzindo  a reflexão crítica dos alunos, devido a tendência pela educação tradicional."
            }
        ]
    },
    {
        enunciado : "QUAL A IMPORTÂNCIA DAS ENERGIAS RENOVÁVEIS PARA O MUNDO?",
        alternativas : [
            {
            texto: "É MUITO IMPORTANTE PARA O MUNDO ATUAL.",
            afirmacao: "SÃO OPÇÕES INESGOTÁVEIS E SUSTENTÁVEIS SEM GERAR RESÍDUOS"
            },
            {
            texto: "NÃO TEM TANTA IMPORT NCIA ASSIM.",
            afirmacao: "FALTA CONHECIMENTO PARA AS QUESTÕES AMBIENTAIS ATUAIS"
            }
        ]
    }
] ;

let atual = 0 ;
let perguntaAtual ;
let historiaFinal = "" ;

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado() ;
        return ;
    } ;
    perguntaAtual = perguntas[atual] ;
    caixaPerguntas.textContent    = perguntaAtual.enunciado ;
    caixaAlternativas.textContent = "" ;
    textoResultado.textContent    = "" ;
    mostraAlternativas() ;
} ; asasa asa a as

function mostraAlternativas(){
    for (const alternativa of perguntas[atual].alternativas){
        const botaoAlternativas = document.createElement("button") ;
        botaoAlternativas.textContent = alternativa.texto ;
        botaoAlternativas.addEventListener("click", ()=>respostaSelecionada(alternativa)) ;
        caixaAlternativas.appendChild(botaoAlternativas) ;
    } 
} ;

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao ;
    historiaFinal += afirmacao + " " ;
    atual++ ;
    mostraPergunta() ;
} ;

mostraPergunta() ;

function mostraResultado(){
    caixaPerguntas.textContent    = "Em 2049..." ;
    textoResultado.textContent    = historiaFinal ;
    caixaAlternativas.textContent = "" ;
}

