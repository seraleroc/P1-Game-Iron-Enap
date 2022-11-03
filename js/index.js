// MANUSEIO DO DOM

const game = new Quiz();

const buttonStart = document.querySelector("#inicio button")
const inicio = document.querySelector("#inicio")
const inputName = document.querySelector("#inicio input")
const perguntas = document.querySelector("#pergunta")
const perguntasBox =document.querySelector('#perguntas')
const nichosBox = document.querySelector('#nichos')

buttonStart.addEventListener("click", () => {
    if (inputName.value === "") {
      return;
    }

    game.renderQuestionsFilme();
    game.renderQuestionsMusic();
    game.renderQuestionsTv();
    game.renderQuestionsJogos();


    inicio.style.display = "none";
    nichosBox.classList.remove('hidden')
    
    game.userName = inputName.value;    
  })
  
  const btnNicho1 = document.querySelector("#nichos #nicho1")
  btnNicho1.addEventListener("click", () => {
    game.nicho = 0
    game.setPerguntaAtual()

    nichosBox.classList.add('hidden')
    perguntasBox.classList.remove('hidden')
    
    game.printQuestion()
  })

  const btnNicho2 = document.querySelector("#nichos #nicho2")
  btnNicho2.addEventListener("click", () => {
    game.nicho = 1
    game.setPerguntaAtual()
  
    nichosBox.classList.add('hidden')
    perguntasBox.classList.remove('hidden')
  
    game.printQuestion()
  })

  const btnNicho3 = document.querySelector("#nichos #nicho3")
  btnNicho3.addEventListener("click", () => {
    game.nicho = 2
    game.setPerguntaAtual()
  
   nichosBox.classList.add('hidden')
    perguntasBox.classList.remove('hidden')
  
    game.printQuestion()
  })

  const btnNicho4 = document.querySelector("#nichos #nicho4")
  btnNicho4.addEventListener("click", () => {
    game.nicho = 3
    game.setPerguntaAtual()
  
    nichosBox.classList.add('hidden')
    perguntasBox.classList.remove('hidden')
  
    game.printQuestion()
  })

  const answers = document.querySelectorAll(".btn")
  answers.forEach((btn) => {
      btn.addEventListener("click", () => {
          game.checkAnswer(btn)
     })
  })

  const retorno = document.querySelector("#retorno")
  retorno.addEventListener("click", () => {
  location.reload()
  })
