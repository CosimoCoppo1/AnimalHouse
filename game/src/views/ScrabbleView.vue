<template>
  <div class="body">
    <section class="container">
      <!-- intro-container section -->
      <h1>Gioca a scarabeo!</h1>
      <div v-if="this.index == -1" class="content">
        <section class="details">
          <p>
            Benvenuto al gioco <b>scarabeo</b> di
            <span lang="en" xml:lang="en">Animal House!</span><br />
            Il gioco consiste nell'<em>indovinare</em> l'animale a cui
            corrisponde l'alimentazione o l'habitat indicato. Ti diamo la
            possibilità di <em>scegliere</em> su che campo metterti in gioco!
          </p>
          <p>
            Passa alla sezione
            <router-link class="link" :to="{ path: '/informazioni-curiose' }">
              curiosità</router-link
            >
            se non ti senti ancora pronto, oppure inizia subito cliccando un
            bottone!
          </p>
          <div class="buttons">
            <button class="feed-choice" type="button" @click="this.initFeed()">
              Alimentazione!
            </button>
            <button
              class="habitat-choice"
              type="button"
              @click="this.initHabitat()"
            >
              Habitat!
            </button>
          </div>
        </section>
      </div>

      <!-- game section -->
      <div v-else-if="this.index == 0" class="content">
        <main>
          <h2 class="word">{{ this.scrabble.textAnswer }}</h2>
          <div class="details">
            <p>
              <i>{{ this.choice }}</i> :
              <span>{{ this.scrabble.textQuestion }}</span>
            </p>
          </div>
          <label for="text-answer"
            >Inserisci il testo dalle lettere mescolate:</label
          >
          <input
            id="text-answer"
            v-model="userAnswer"
            :maxlength="this.maxLength"
            type="text"
            placeholder="Riordina le lettere e indovina l'animale..."
          />
          <div class="buttons">
            <button
              type="button"
              class="refresh-word"
              @click="this.refreshGame()"
            >
              Cambia parola
            </button>
            <button
              type="button"
              class="check-word"
              @click="this.checkUserWord()"
            >
              Verifica parola
            </button>
          </div>
          <div class="buttons">
            <button type="button" class="final" @click="this.stopGame()">
              Smetti di giocare...
            </button>
          </div>
          <p class="message">
            <span v-if="this.timerMessage != 0">{{ this.message }}</span>
          </p>
        </main>
      </div>

      <!-- closed-game section -->
      <div v-else class="content">
        <section class="details">
          <p>Gioco terminato.<br />Dai uno sguardo al tuo punteggio:</p>
          <span><b class="link">Punti</b>: {{ this.points }}</span
          >,
          <span
            ><b class="link">Punteggio finale</b>: {{ this.finalPoints }}
          </span>
          <p class="mt-2">Inizia una nuova partita cliccando il pulsante!</p>
          <div class="buttons">
            <button
              class="feed-choice"
              type="button"
              @click="this.restartGame()"
            >
              Rigioca!
            </button>
            <button
              class="habitat-choice"
              type="button"
              @click="this.postScores()"
            >
              Salva il punteggio!
            </button>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ScrambleView",
  data() {
    return {
      myVar: [this.$globalVar, this.$keyName],
      gameQuestions: [],
      scrabble: [{ textAnswer: "", textQuestion: "" }],
      userAnswer: "",
      correctAnswer: "",
      message: "",
      point: 0,
      maxLength: 0,
      timerMessage: 0,
      choice: "",
      index: -1,
      points: 0,
      finalPoints: 0,
      userId: "",
      userData: {},
      userPoints: {
        game: "scarabeo",
        bestScore: null,
        user: null,
      },
    };
  },
  watch: {
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
    /* GET credenziali utente con accesso effettuato */
    getUser() {
      this.userData = JSON.parse(localStorage.getItem(this.$keyName));
      if (this.userData != null) {
        axios
          .get(`${this.$globalVar}/users?email=${this.userData.email}`)
          .then((response) => (this.userId = response.data[0]._id));
      }
    },
    /* GET testi delle domande di gioco */
    generateQuizQuestions() {
      axios
        .get(`${this.$globalVar}/curiosities?qty=50`)
        .then((response) => (this.gameQuestions = response.data));
    },
    /* inizio partita per filtro Alimentazione */
    initFeed() {
      this.choice = "Alimentazione";
      this.index = 0;
      this.initGame();
    },
    /* inizio partita per filtro Habitat */
    initHabitat() {
      this.choice = "Habitat";
      this.index = 0;
      this.initGame();
    },
    /** crea box del turno domanda-risposta scarabeo
     * Math.random(): restituisce 0 <= x < 1
     * Math.floor(): arrotonda per difetto x
     */
    initGame() {
      let randomQuestion =
        this.gameQuestions[
          Math.floor(Math.random() * this.gameQuestions.length)
        ];
      let splittedAnswer = randomQuestion.name.split("");
      for (let i = 0; i < splittedAnswer.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = splittedAnswer[i];
        splittedAnswer[i] = splittedAnswer[j];
        splittedAnswer[j] = tmp;
      }
      this.scrabble.textAnswer = splittedAnswer.join("");
      if (this.choice == "Alimentazione") {
        this.scrabble.textQuestion = randomQuestion.alimentazione;
      } else {
        this.scrabble.textQuestion = randomQuestion.habitat;
      }
      this.correctAnswer = randomQuestion.name.toLowerCase();
      this.maxLength = this.correctAnswer.length;
    },
    /* reimposta condizioni di gioco iniziali */
    refreshGame() {
      this.scrabble.textAnswer = "";
      this.scrabble.textQuestion = "";
      this.userAnswer = "";
      this.correctAnswer = "";
      this.initGame();
    },
    /* confronta risposta dell'utente con risposta corretta */
    checkUserWord() {
      if (this.userAnswer == "") {
        this.message = "";
      } else if (this.userAnswer != this.correctAnswer) {
        this.message = "Non è la risposta corretta... Riprova!";
        this.userAnswer = "";
        this.timerMessage = 2;
      } else {
        this.points++;
        this.refreshGame();
      }
    },
    /* termina la partita */
    stopGame() {
      this.finalPoints = this.points * 4 + 20;
      if (this.finalPoints < 0) {
        this.finalPoints = 0;
      }
      this.index = 2;
    },
    /* reimposta le caratteristiche di gioco iniziali */
    restartGame() {
      this.index = -1;
      this.points = 0;
      this.finalPoints = 0;
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
    this.generateQuizQuestions();
    this.getUser();
  },
};
</script>

<style scoped>
/* helpers */
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("../assets/scrabble/bg__gallery.png") no-repeat center center;
  background-size: 740px;
}

.link {
  text-decoration: none;
  color: #9e009e;
}

.content .buttons {
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

/* intro-container section */
.container {
  width: 500px;
  border-radius: 20px;
  background: #fff;
}

.container h1 {
  font-size: 20px;
  font-weight: bold;
  padding: 25px 25px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

/* game section */
.container .content {
  margin: 25px 20px 35px;
}

.content .word {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 20px;
  text-transform: uppercase;
  overflow: auto;
}

.details p {
  font-size: 18px;
  margin-bottom: 20px;
}

.content input {
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 18px;
  padding: 0 16px;
  border-radius: 5px;
  border: 1px solid #aaa;
}

.buttons .refresh-word {
  background: #41576c;
}

.buttons .check-word {
  background: #143ee6;
}

.buttons .feed-choice {
  background: #9d1574;
}

.buttons .habitat-choice {
  background: #9e009e;
}

.final {
  background: #a40a0a;
}

.message {
  margin: 10px auto;
  text-align: center;
  font-weight: bold;
  color: red;
}
</style>
