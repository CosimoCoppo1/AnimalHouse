<template>
  <div class="quiz">
    <div class="quiz-container">
      <div class="title-container">
        <h1 class="title">
          <span lang="en" xml:lang="en">Quiz Animal House</span>
        </h1>
        <div class="question-container">
          <!-- intro-container section -->
          <div v-if="this.index == -1" class="details">
            <p>
              Benvenuto nella sezione <b lang="en" xml:lang="en">quiz</b> di
              <span lang="en" xml:lang="en">Animal House</span>!<br />
              Gioca con il nostro splendido
              <span lang="en" xml:lang="en">quiz</span> a tema animale cliccando
              il pulsante
              <i>Inizia!</i>
            </p>
            <p>
              Tante domande su tutte le specie animali: scegli la
              <em>categoria</em> su cui giocare dal menù a tendina!
            </p>
            <label for="choose-category">
              Scegli la categoria su cui giocare:</label
            >
            <div class="input-group mt-3">
              <select
                id="choose-category"
                class="form-select fw-bold"
                required
                name="animal category"
                v-model="this.chooseCategory"
              >
                <option
                  v-for="(category, index) in this.categories"
                  :key="index"
                  :value="index"
                >
                  {{ category }}
                </option>
              </select>
            </div>
            <div class="buttons">
              <button type="button" class="btn init" @click="this.initGame()">
                Inizia!
              </button>
            </div>
          </div>

          <!-- game section -->
          <main v-else-if="this.index < this.count">
            <h2
              class="question"
              v-html="this.questions[this.index].question"
            ></h2>
            <button
              class="options-container border border-black py-2 px-3 mt-3"
              v-for="(answer, key) in this.questions[this.index].answers"
              :key="answer"
              @click="this.answered(key)"
              :class="
                this.selectedAnswer === ''
                  ? 'option-selected'
                  : `option-${this.selectClass(key, this.index)}`
              "
            >
              <span v-html="answer"></span>
            </button>

            <div class="buttons">
              <button
                class="btn init"
                v-show="
                  this.selectedAnswer !== '' && this.index < this.count - 1
                "
                @click="this.nextQuestion()"
              >
                Prossima domanda!
              </button>
              <button
                class="btn send"
                v-show="
                  this.selectedAnswer !== '' && this.index === this.count - 1
                "
                @click="this.showResults()"
              >
                Termina il <span lang="en" xml:lang="en">quiz</span>!
              </button>
            </div>
          </main>

          <!-- closed-game section -->
          <div v-else class="details">
            <p>Gioco terminato.<br />Dai uno sguardo al tuo punteggio:</p>
            <span
              ><b class="link">Risposte corrette: </b>
              {{ this.correctAnswers }}</span
            >,
            <span
              ><b class="link">Risposte errate: </b>
              {{ this.wrongAnswers }}</span
            >
            <br />
            <span
              ><b class="link">Punteggio accumulato: </b>
              {{ this.finalPoints }}</span
            >
            <div class="buttons">
              <button class="btn init" type="button" @click="this.resetQuiz()">
                Rigioca!
              </button>
              <button class="btn send" type="button" @click="this.postScores()">
                Salva il punteggio!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QuizView",
  data() {
    return {
      myVar: [this.$globalVar, this.$keyName],
      selectedAnswer: "",
      index: -1,
      count: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      questions: [],
      chooseCategory: 0,
      finalPoints: 0,
      categories: [
        "Tutti",
        "Animali australiani",
        "Animali delle Galapagos",
        "Aquila Reale",
        "Bombo",
        "Bonobo",
        "Camaleonte",
        "Castoro",
        "Cervo",
        "Cetacei",
        "Coccinella",
        "Coccodrillo",
        "Coralli",
        "Dugongo",
        "Elefante",
        "Farfalle",
        "Foche, otarie e trichechi",
        "Formica",
        "Giaguaro",
        "Gipeto barbuto",
        "Giraffa",
        "Gorilla",
        "Lemuri",
        "Leone",
        "Leopardo",
        "Lepri e conigli",
        "Lince",
        "Lupo",
        "Marmotta",
        "Meduse",
        "Okapi",
        "Orango",
        "Orso bruno",
        "Orso polare",
        "Panda Gigante",
        "Panda Rosso",
        "Pangolino",
        "Pernice bianca",
        "Pesci",
        "Pinguini",
        "Pipistrelli",
        "Polpi, seppie e calamari",
        "Ragni",
        "Rane, rospi e raganelle",
        "Rapaci notturni",
        "Riccio",
        "Rinoceronte",
        "Serpenti",
        "Squalo",
        "Tigre",
        "Volpe artica",
      ],
      userId: "",
      userData: {},
      userPoints: {
        game: "quiz",
        bestScore: null,
        user: null,
      },
    };
  },
  methods: {
    /* GET credenziali utente con accesso effettuato */
    getUser() {
      this.userData = JSON.parse(localStorage.getItem(this.$keyName));
      if (this.userData != null) {
        axios
          .get(`${this.$globalVar}/users?username=${this.userData.username}`)
          .then((response) => (this.userId = response.data[0]._id));
      }
    },
    /* GEt domande e creazione table per il quiz game */
    async initGame() {
      if (this.chooseCategory == 0) {
        let response = await axios.get(`${this.$globalVar}/questions`);
        this.questions = response.data;
        this.count = 10;
      } else {
        let response = await axios.get(
          `${this.$globalVar}/questions?category=${
            this.categories[this.chooseCategory]
          }`
        );
        this.questions = response.data;
        this.count = this.questions.length;
      }
      this.index = 0;
    },
    /* verifica correttezza della risposta dell'utente */
    answered(key) {
      this.selectedAnswer = key;
      if (this.selectedAnswer === this.questions[this.index].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    /* selezione della risposta per l'utente */
    selectClass(key, num) {
      if (key === this.questions[num].correctAnswer) {
        return "correct";
      }
      if (this.selectedAnswer === key) {
        return "incorrect";
      }
    },
    /* vedi domanda-risposte successivi */
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
    },
    /* mostra i risultati finali del gioco */
    showResults() {
      this.index++;
      this.finalPoints = this.correctAnswers * 3 + 80 - this.wrongAnswers * 2;
    },
    /* reimposta le caratteristiche di gioco */
    resetQuiz() {
      this.chooseCategory = 0;
      this.index = -1;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
    /* POST punteggio di gioco dell'utente che ha effettuato l'accesso */
    postScores() {
      this.userPoints.bestScore = this.finalPoints;
      this.userPoints.user = this.userId;
      axios
        .post(`${this.$globalVar}/scores/updateOrCreate`, this.userPoints)
        .then((response) => {
          if (response.status == 200) {
            alert(
              "Punteggio salvato con successo! Vedi i tuoi punteggi alla sezione dati personali."
            );
          }
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Non sei ancora membro della famiglia Animal House e non puoi memorizzare i tuoi punteggi di gioco! Passa alla sezione Dati personali accedendo o effettuando la registrazione per scalare le classifiche di gioco con gli altri membri di Animal House"
          );
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
/* helpers */
.link {
  text-decoration: none;
  color: #4338ca;
}

.buttons {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.buttons button {
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 15px 0;
  font-size: 16px;
  border-radius: 5px;
  width: calc(100% / 2 - 8px);
}

/* game section */
.details p {
  font-size: 18px;
  margin-bottom: 20px;
}

.buttons .init {
  background: #285b8a;
  border: 1px solid black;
}

.buttons .send {
  background: #0e65b6;
  border: 1px solid black;
}

.quiz {
  background: url("../assets/quiz/bg__poster.jpg") no-repeat center center;
  background-color: #f3f4f6;
  color: #374151;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.quiz-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.title-container {
  width: 100%;
  max-width: 36rem;
}

.title {
  color: #4338ca;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;
}

.question-container {
  padding: 3rem;
  margin-top: 2rem;
  background-color: #ffffff;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.question {
  font-size: 20px;
  font-weight: bold;
}

.options-container {
  display: block;
  text-align: left;
  font-size: 17px;
  border-radius: 8px;
  min-width: 480px;
}

.option-selected:hover {
  background-color: #f3f4f6;
  cursor: pointer;
}

.option-correct {
  background-color: #a7f3d0;
}

.option-incorrect {
  background-color: #fecaca;
}
</style>
