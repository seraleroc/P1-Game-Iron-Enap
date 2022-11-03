// Classe

class Quiz {
    constructor() {
      this.userName = "";
      this.filmesQuestions = [
        {
          question:
            "No filme Toy Story, enquanto Andy abria os presentes, apenas um brinquedo não se sentia ameaçado com a possibilidade de ser substituído. Que brinquedo era esse?",
          answers: ["Dinossauro", "Cabeça de Batatas", "Buzz", "Woody"],
          correctAnswer: "Woody",
        },
  
        {
          question: 'Em que ano foi lançado o filme Titanic (de James Cameron) em Londres?',
          answers: ["1994", "1995", "1996", "1997"],
          correctAnswer: "1997",
        },
  
        {
          question:
            "No filme Piratas do Caribe No Fim do Mundo, a sentença aplicada para quem se associasse com pirataria seria a morte. Qual o meio aplicado para a execução?",
          answers: [
            "Decapitação",
            "Afogamento",
            "Enforcamento",
            "Seria jogado de um penhasco",
          ],
          correctAnswer: "Enforcamento",
        },
        {
          question: "Como Shrek conheceu o burro?",
          answers: ["Burro salvou a vida de Shrek", "Se conheceram ao resgatarem Fiona do castelo", "Shrek salvou a vida do Burro", "Shrek comprou o Burro"],
          correctAnswer: "Shrek salvou a vida do Burro",
        },
        {
          question:
            'Onde se passa a história de Velozes e Furiosos 5?',
          answers: ["No México", "No Brasil", "Na Alemanha", "Em Tóquio"],
          correctAnswer: "No Brasil",
        },
        {
          question: 'Qual o filho mais velho de Vito no filme "O Poderoso Chefão"?',
          answers: ["Sonny", "Michael", "Fredo", "Marlon"],
          correctAnswer: "Sonny",
        },
        {
          question: "Em Star Wars Episódio V - O Império Contra-Ataca, qual frase mais famosa falada por Darth Vader?",
          answers: ["Luke, você é meu irmão!", "Luke, você é meu pai!", "Não Luke, eu sou seu pai!", "Ele não fala nada."],
          correctAnswer: "Não Luke, eu sou seu pai!",
        },
        {
          question:
            "Qual é o ator que interpreta Ferris Bueller's em Curtindo a Vida Adoidado?",
          answers: [
            "Will Smith",
            "Robert Pattison",
            "Matthew Broderick",
            "Silvester Stalone",
          ],
          correctAnswer: "Matthew Broderick",
        },
        {
          question:
            "Qual mutante foi assassinado por Wolverine?",
          answers: [
            "Dentes de Sabre",
            "Gambit",
            "Bradley",
            "Agente Zero",
          ],
          correctAnswer: "Agente Zero",
        },
        {
          question: 'Quais atores interpretaram, respectivamente, o Homem Aranha 1 e o Espetacular Homem Aranha?',
          answers: ["Andrew Garfield e Tobey Maguire", "Tobey Maguire e Andrew Garfield", "Mark Web e Juntin Bieber", "Johnny Depp e Tobey Maguire"],
          correctAnswer: "Tobey Maguire e Andrew Garfield",
        },
      ];
      this.musicQuestions = [
        {
          question:
            "A quem Madonna dedicou o álbum 'Like A Virgin'?",
          answers: [
            "à sua mãe",
            "ao seu pai",
            "a todas as virgens do mundo",
            "a todas as mulheres do mundo",
          ],
          correctAnswer: "a todas as virgens do mundo",
        },
        {
          question: 'Em qual álbum de Raul Seixas foi gravado a faixa "Rock das Aranha"?',
          answers: [
            "Mata Virgem",
            "A Pedra do Genesis",
            "Abre-te Sésamo",
            "Uah-Bap-Lu-Bap-Lah-Béin-Bum!",
          ],
          correctAnswer: "Abre-te Sésamo",
        },
        {
          question: "Qual o verdadeiro nome do Bono Vox, vocalista do U2",
          answers: ["Paul David Vox", "Paul David Hewson", "Bono Vox", "Bono Hewson Vox"],
          correctAnswer: "Paul David Hewson",
        },
        {
          question:
            "Em qual cidade o Ed Sheeran nasceu?",
          answers: ["Halifax, Inglaterra.", "Amsterdã, Holanda.", "Toronto, Canadá.", "Nova Yorque, Estados Unidos."],
          correctAnswer: "Halifax, Inglaterra.",
        },
        {
          question:
            "Em que ano a Legião urbana lançou seu primeiro disco?",
          answers: ["1991", "1985", "1990", "1986"],
          correctAnswer: "1985",
        },
        {
          question: "Qual foi o álbum da banda Engenheiros Do Hawaii criado no ano de 1990?",
          answers: ["Longe Demais das Capitais", "O Papa é Pop", "A Revolta dos Dândis", "Várias Variáveis"],
          correctAnswer: "O Papa é Pop",
        },
        {
          question:
            "Em que ano a vocalista Fergie entrou para o Black Eyed Peas?",
          answers: ["2000", "2001", "2002", "2003"],
          correctAnswer: "2003",
        },
        {
          question:
            "Qual o nome completo do guitarrista do Led Zeppelin?",
          answers: ["Jimmy Page.", "Jimmy Patric Page.", "James Patrick Page.", "Jimmy Page Jones."],
          correctAnswer: "James Patrick Page.",
        },
        {
          question:
            "Em que ano foi lançado a música 'Smells Like Teen Spirit' do Nirvana?",
          answers: ["1990", "1994", "2000", "1991"],
          correctAnswer: "1991",
        },
        {
          question: "A banda Mamonas Assassinas era de qual cidade?",
          answers: ["Taubaté", "Guarulhos", "Ribeirão Preto", "Santos"],
          correctAnswer: "Guarulhos",
        },
      ];
      this.tvQuestions = [
        {
          question: "Na Novela Ti-Ti-Ti, qual o verdadeiro nome de Jacque Leclair?",
          answers: ["Ariclenes", "Victor Valentin", "André Espina", "Rodrigo Rituro"],
          correctAnswer: "André Espina",
        },
        {
          question: "O personagem Pica-Pau já foi premiado com algo bastante valioso para a indústria norte-americana de cinema e TV. Que prêmio ele recebeu?",
          answers: ["Um Oscar, na categoria de Melhor Animação.", "Uma estrela na Calçada da Fama, localizada em Los Angeles.", "Um Emmy, na categoria Melhor Personagem Animado.", "Nada, o personagem Pica-Pau nunca ganhou nada."],
          correctAnswer: "Uma estrela na Calçada da Fama, localizada em Los Angeles.",
        },
        {
          question:
            "O The Voice é dividido em quatro fases. Quais são elas?",
          answers: ["Audições, Ao Vivo, Semifinais e a Final.", "Audições, Batalhas, Ao Vivo e a Final.", "Aberturas, Batalhas, Semifinais e a Final.", "Audições, Batalhas, Semifinais e a Final."],
          correctAnswer: "Audições, Batalhas, Ao Vivo e a Final.",
        },
        {
          question:
            "Em 'A Grande Familia', qual o nome do filho de Bebel?",
          answers: ["Juvenal", "Floriano", "Tuco", "Lineu"],
          correctAnswer: "Floriano",
        },
        {
          question: "The Big Bang Theory - Qual camisa Sheldon usa nas sextas?",
          answers: ["Lanterna Verde", "Flash", "Capitão América", "Homem Aranha"],
          correctAnswer: "Flash",
        },
        {
          question: "Chaves - Seu Madruga já trabalhou em vários empregos. Qual desses não foi um emprego dele?",
          answers: ["Entregador de lenha", "Garçom", "Agente especializado em compra e venda de artigos para o lar", "Leiteiro"],
          correctAnswer: "Garçom",
        },
        {
          question:
            "Sítio do Picapau Amarelo - Qual a fruta favorita da Narizinho?",
          answers: ["Maçã", "Jabuticaba", "Pera", "Banana"],
          correctAnswer: "Jabuticaba",
        },
        {
          question: "Castelo Rá-Tim-Bum - Por quem Nino é apaixonado? ",
          answers: ["Celeste", "Penélope", "Biba", "Caipora"],
          correctAnswer: "Penélope",
        },
        {
          question:
            "Série Friends - Quais os animais de estimação de Joey e Chandler?",
          answers: [
            "Um cachorro e um gato",
            "Um pato e um galo",
            "Um hamster e um cachorroa",
            "Um coelho e um peixe",
          ],
          correctAnswer: "Um pato e um galo",
        },
        {
          question: "How I Met Your Mother - Qual o casamento que se desenrola na última temporada?”?",
          answers: ["Robin e Barney", "Robin e Ted", "Lilly e Marshall", "Ted e Victória"],
          correctAnswer: "Robin e Barney",
        },
      ];
      this.jogosQuestions = [
        {
          question: 'No Mario Kart Wii, o que faz um Golden Mushroom?',
          answers: [
            "Dá turbos infinitos por um tempo para o corredor",
            "Dá 3 turbos para o corredor",
            "Deixa o corredor gigante",
            "Deixa o corredor invencível por um certo tempo",
          ],
          correctAnswer: "Dá turbos infinitos por um tempo para o corredor",
        },
        {
          question: 'O Pac-Man original foi lançado em que ano?',
          answers: ["1981.", "1972.", "1990.", "1985."],
          correctAnswer: "1981.",
        },
        {
          question: 'Qual o nome da cidade do jogo Need for Speed Undercover?',
          answers: ["Crystal Bay", "Detroit", "Rockport City", "Tri-City Bay"],
          correctAnswer: "Tri-City Bay",
        },
        {
          question: "No primeiro Zelda, cujo o nome é somente The Legend of Zelda, logo que começa o jogo encontra-se uma caverna. O que tem nessa caverna?",
          answers: ["Uma espada.", "A primeira Dungeon do jogo.", "Um escudo.", "O primeiro fragmento da triforce."],
          correctAnswer: "Uma espada.",
        },
        {
          question: 'Tomb Raider - Em que local Lara sofreu um acidente de avião?',
          answers: ["Cordilheira dos Andes", "Montanhas Rochosas", "Cordilheira do Himalaia", "Montanhas Brancas"],
          correctAnswer: "Cordilheira do Himalaia",
        },
        {
          question: 'World of Warcraft - Qual é o nome do aspecto da magia?',
          answers: [
            "Ysera",
            "Malygos",
            "Kelthusad",
            "Alexstrasza",
          ],
          correctAnswer: "Malygos",
        },
        {
          question: "Kingdom Hearts - Qual era o principal plano de Xaldin em Beast's Castle?",
          answers: [
            "Transformar Bela em um Heartless.",
            "Pegar a rosa para ele, já que ela tem poderes mágicos.",
            "Queria o Heartless e Nobody de Fera.",
            "Ele tinha perdido sua lança e estava atrás dela.",
          ],
          correctAnswer: "Queria o Heartless e Nobody de Fera.",
        },
        {
          question: "Assassin's Creed I - Quem são os inimigos dos Assassinos?",
          answers: ["Mongóis", "Cruzados", "Templários", "Egípcios"],
          correctAnswer: "Templários",
        },
        {
          question:
            'Pokémon - Qual o tipo de Jynx?',
          answers: ["Gelo/Fada", "Psíquico/Fada", "Gelo/Psíquico", "Água/Fada"],
          correctAnswer: "Gelo/Psíquico",
        },
        {
          question:
            'Qual Call of Duty tem uma missão que se passa na cidade do Rio de Janeiro?',
          answers: [
            "Black Ops",
            "Modern Warfare 2",
            "Modern Warfare 3",
            "Call of Duty 3",
          ],
          correctAnswer: "Modern Warfare 2",
        },
      ];
      this.questions = [
        this.filmesQuestions,
        this.musicQuestions,
        this.tvQuestions,
        this.jogosQuestions,
      ];
      this.nicho;
      this.solution = [];
      this.round = 0;
      this.perguntaAtual;
      this.points = 0;
    }
  
    setNicho(clickNicho) {
      this.nicho = clickNicho;
    }
  
    setPerguntaAtual() {
      this.perguntaAtual = this.questions[this.nicho][this.round];
    }
  
    proximaPergunta() {
      if (this.round < 10) {
        this.round++;
        this.perguntaAtual = this.questions[this.nicho][this.round];
      }
    }
  
    printQuestion() {
      if (this.round === 10) {
        return;
      }
      perguntas.innerText = game.perguntaAtual.question;
      game.perguntaAtual.answers.forEach((opcao, index) => {
        const answer = document.querySelector(`#resposta${index + 1}`);
        answer.innerText = opcao;
      });
    }
  
    renderQuestionsFilme() {
      let questionRandomOrder = this.questions[0].sort(() => {
        return Math.random() - 0.5;
      });
    }
  
    renderQuestionsMusic() {
      let questionRandomOrder = this.questions[1].sort(() => {
        return Math.random() - 0.5;
      });
    }
  
    renderQuestionsTv() {
      let questionRandomOrder = this.questions[2].sort(() => {
        return Math.random() - 0.5;
      });
    }
  
    renderQuestionsJogos() {
      let questionRandomOrder = this.questions[3].sort(() => {
        return Math.random() - 0.5;
      });
    }
  
    checkAnswer(clickAnswer) {
      let answers = document.querySelectorAll(".btn");
  
      if (clickAnswer.innerText === this.perguntaAtual.correctAnswer) {
        this.points++;
        this.proximaPergunta();
        this.checkStatus();
        clickAnswer.classList.add("acertou");
  
        setTimeout(() => {
          this.printQuestion();
          clickAnswer.classList.remove("acertou");
        }, 1000);
      } else {
        this.proximaPergunta();
        this.checkStatus();
        clickAnswer.classList.add("errou");
  
        setTimeout(() => {
          this.printQuestion();
          clickAnswer.classList.remove("errou");
        }, 1000);
      }
    }
  
    checkStatus() {
      const status = document.querySelector("#status");
      const venceu = document.querySelector(".venceu");
      const perdeu = document.querySelector(".perdeu");
  
      if (this.points === 5) {
        let div = document.createElement("div");
        div.innerText = `
                  Parabéns, ${this.userName}! Você venceu!
                `;
  
        inicio.classList.add("hide");
        perguntasBox.classList.add("hide");
        status.classList.remove("hide");
        status.style.display = "flex";
  
        perdeu.classList.add("hide");
  
        document.getElementById("endMessage").appendChild(div);
      }
      if (this.round === 10 && this.points < 5) {
        let div = document.createElement("div");
        div.innerHTML = `
                Que pena, ${this.userName}. Tente novamente, ou escolha outro assunto.
              `;
  
        inicio.classList.add("hide");
        perguntasBox.classList.add("hide");
        status.classList.remove("hide");
        status.style.display = "flex";
  
        venceu.classList.add("hide");
  
        document.getElementById("endMessage").appendChild(div);
      }
    }
  }
  