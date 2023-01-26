<template>
  <div class="body">
    <div class="container">
      <h2>Gioca a scarabeo!</h2>
      <div class="content">
        <p class="word">{{ this.scrabble.textAnswer }}</p>
        <div class="details">
          <p class="time">
            Tempo rimasto:
            <span
              ><b>{{ this.timerCount }}</b
              >s</span
            >
          </p>
          <p class="hint">
            <span>{{ this.scrabble.textQuestion }}</span>
          </p>
        </div>
        <input
          v-model="userAnswer"
          :maxlength="this.maxLength"
          type="text"
          placeholder="Enter a valid word"
        />
        <div class="buttons">
          <button class="refresh-word" @click="refreshGame()">
            Refresh Word
          </button>
          <button class="check-word" @click="checkUserWord()">
            Check Word
          </button>
        </div>
        <p>
          <span v-if="this.timerMessage != 0">{{ this.message }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ScrambleView",
  data() {
    return {
      gameQuestions: [],
      scrabble: [{ textAnswer: "", textQuestion: "" }],
      userAnswer: "",
      correctAnswer: "",
      message: "",
      point: 0,
      maxLength: 0,
      timerCount: 30,
      timerMessage: 0,
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.stopGame();
        }
      },
      immediate: true,
    },
    timerMessage: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerMessage--;
          }, 1000);
        }
      },
      immediate: false,
    },
  },
  methods: {
    // API url "https://opentdb.com/api_config.php"
    // domande: 50, risposta multipla
    // ogni tipo di difficoltà, categoria animali
    generateQuizQuestions() {
      axios.get("http://localhost:8000/curiosities?qty=20").then((response) => {
        this.gameQuestions = response.data;
        console.log(this.gameQuestions);
        this.initGame();
      });
    },
    // crea box del turno domanda-risposta scarabeo
    // Math.random(): restituisce 0 <= x < 1
    // Math.floor(): arrotonda per difetto x
    initGame() {
      // resituisce x in virgola mobile, poi arrotondata
      // x risultante è indice della domanda-risposta del turno
      let randomQuestion =
        this.gameQuestions[
          Math.floor(Math.random() * this.gameQuestions.length)
        ];
      // split per ogni lettera della risposta
      let splittedAnswer = randomQuestion.name.split("");
      // randomizza l'ordine delle lettere nella risposta
      for (let i = 0; i < splittedAnswer.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = splittedAnswer[i];
        splittedAnswer[i] = splittedAnswer[j];
        splittedAnswer[j] = tmp;
      }
      // join("") concatena le lettere in splittedAnswer
      // memorizza domanda-risposta nelle variabili di gioco
      this.scrabble.textAnswer = splittedAnswer.join("");
      this.scrabble.textQuestion = randomQuestion.alimentazione;
      this.correctAnswer = randomQuestion.name.toLowerCase();
      // impostata massima lunghezza di inserimento caratteri per
      // l'utente, pari alla lunghezza della risposta del turno
      this.maxLength = this.correctAnswer.length;
    },
    // reimposta condizioni di gioco iniziali
    refreshGame() {
      this.scrabble.textAnswer = "";
      this.scrabble.textQuestion = "";
      this.userAnswer = "";
      this.correctAnswer = "";
      this.timerCount = 30;
      this.initGame();
    },
    // confronta risposta dell'utente con risposta corretta
    // mostra messaggi in basi alla relazione tra le due
    // passa al turno successivo se le due combaciano
    checkUserWord() {
      if (this.userAnswer == "") {
        this.message = "";
      } else if (this.userAnswer !== this.correctAnswer) {
        this.message = "Non è la risposta corretta... Riprova!";
        this.userAnswer = "";
        this.timerMessage = 2;
      } else {
        this.refreshGame();
      }
    },
    // termina il turno corrente e ne genera uno nuovo
    stopGame() {
      this.userAnswer = "";
      this.message =
        "Spiacente... Il tempo è terminato. Passa alla nuovo turno!";
      this.timerMessage = 2;
      this.refreshGame();
    },
  },
  created() {
    this.generateQuizQuestions();
  },
};
</script>

<style>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #5372f0;
}

.container {
  width: 450px;
  border-radius: 7px;
  background: #fff;
}

.container h2 {
  font-size: 25px;
  font-weight: 500;
  padding: 18px 25px;
  border-bottom: 1px solid #ccc;
}

.container .content {
  margin: 25px 20px 35px;
}

.content .word {
  font-size: 33px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 24px;
  margin-right: -24px;
  text-transform: uppercase;
}

.content .details {
  margin: 25px 0 20px;
}

.details p {
  font-size: 18px;
  margin-bottom: 10px;
}

.details p b {
  font-weight: 500;
}

.content input {
  width: 80%;
  height: 60px;
  outline: none;
  font-size: 18px;
  padding: 0 16px;
  border-radius: 5px;
  border: 1px solid #aaa;
}

.content .buttons {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.buttons button {
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 15px 0;
  font-size: 17px;
  border-radius: 5px;
  width: calc(100% / 2 - 8px);
}

.buttons .refresh-word {
  background: #6c757d;
}

.buttons .check-word {
  background: #5372f0;
}
</style>
