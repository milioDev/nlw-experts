
const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Realiza uma comparação estrita de valor e tipo",
        "Realiza uma comparação solta de valor e tipo",
        "Realiza uma comparação solta apenas de valor",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Um loop que não termina",
        "Uma função que captura variáveis do escopo circundante",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um formato de arquivo de imagem",
        "Uma linguagem de programação",
        "Uma interface que representa a estrutura de um documento HTML",
      ],
      correta: 2,
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let = minhaVariavel;",
        "variable minhaVariavel;",
        "let minhaVariavel;",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma biblioteca popular de JavaScript",
        "Uma notação para representar dados estruturados",
        "Uma função de manipulação de strings",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' para declarar variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para variáveis mutáveis, const para variáveis imutáveis",
        "const é usado para variáveis mutáveis, let para variáveis imutáveis",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Uma função pré-definida para manipulação de arrays",
        "Um tipo de dado primitivo",
        "Uma interação do usuário ao clicar em um elemento HTML",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é uma Promise em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um objeto representando a eventual conclusão ou falha de uma operação assíncrona",
        "Um operador lógico",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a finalidade do método 'map()' em JavaScript?",
      respostas: [
        "Mapear coordenadas geográficas",
        "Modificar elementos de um array e retornar um novo array",
        "Realizar uma busca em uma matriz",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Um tipo de estrutura de controle de fluxo",
        "O comportamento de mover declarações para o topo de um escopo durante a fase de compilação",
        "Uma técnica de otimização de código",
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
    
  
  //loop ou laço de repetição
  for(const item of perguntas)    {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  
  for(let resposta of item.respostas)  {
   const dt = quizItem.querySelector('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item) 
    }
     mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    } 
  
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
   //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  
  
  }
  
  
  
  
  
  
  