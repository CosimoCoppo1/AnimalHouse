<template>
  <div class="container rps">
    <!-- description section -->
    <section class="grid paragraph" style="margin-top: 70px">
      <div class="col">
        <h1 class="description__title">Morra cinese?</h1>
        <p class="text">
          Sei sicuro di stare giocando alla vera morra cinese?<br />
          Sorprendentemente <b><em>sì</em></b
          >! Divertiti a giocare alla
          <b>morra cinese</b>
          a tema animale di <span lang="en" xml:lang="en">Animal House</span>.
          Dimentica il <em>classico</em> sasso, carta e forbice e usa l'<b
            >elefante</b
          >
          per schiacciare il <b>gatto</b>, il <b>gatto</b> per mangiare il
          <b>topo</b> e il <b>topo</b> per spaventare l'<b>elefante</b>.
        </p>
      </div>
    </section>

    <!-- points section -->
    <section class="row content">
      <div class="d-flex felx-row">
        <div class="d-flex scores flex-row">
          <div
            class="d-flex align-items-center you mr-3 justify-content-between"
          >
            <span class="text">Tuoi punti: </span
            ><span
              class="score fw-bold"
              :class="
                this.yourScore >= this.computerScore
                  ? 'text-success'
                  : 'text-danger'
              "
              >{{ this.yourScore }}
            </span>
          </div>
          <div class="d-flex align-items-center computer">
            <span class="text">, Sfidante: </span
            ><span
              class="score fw-bold"
              :class="
                this.computerScore >= this.yourScore
                  ? 'text-success'
                  : 'text-danger'
              "
              >{{ this.computerScore }}</span
            >
          </div>
          <div class="d-flex align-items-center computer">
            <span class="text">, Punti totali accumulati: </span>
            <span
              class="score fw-bold"
              :class="this.finalPoints < 0 ? 'text-danger' : 'text-success'"
            >
              {{ this.finalPoints }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- reset area -->
    <div class="row">
      <section class="col-md-6 mx-auto">
        <main
          class="d-flex flex-row justify-content-between align-items-center"
        >
          <section class="options">
            <button
              class="r"
              :class="this.yourWeapon === 'Rock' ? 'checked' : ''"
              @click="chooseWeapon('Rock')"
            >
              <p hidden>clicca</p>
            </button>
            <button
              class="p"
              :class="this.yourWeapon === 'Paper' ? 'checked' : ''"
              @click="chooseWeapon('Paper')"
            >
              <p hidden>clicca</p>
            </button>
            <button
              class="s"
              :class="this.yourWeapon === 'Scissor' ? 'checked' : ''"
              @click="chooseWeapon('Scissor')"
            >
              <p hidden>clicca</p>
            </button>
          </section>
          <div class="game">
            <button class="chooseWeapon" v-if="!this.yourWeapon">
              Scegli il tuo animale
            </button>
            <button class="fight" v-if="this.yourWeapon" @click="fight()">
              SFIDA!
            </button>
            <div class="fighting" v-if="this.fighting">
              <div class="spinner-border text-danger" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
            <div class="result" :class="this.result" v-if="this.result">
              {{ this.result }}
            </div>
          </div>
          <section class="it">
            <div v-show="this.computerWeapon === 'Rock'" class="r"></div>
            <div v-show="this.computerWeapon === 'Paper'" class="p"></div>
            <div v-show="this.computerWeapon === 'Scissor'" class="s"></div>
          </section>
        </main>
        <section
          class="d-flex flex-row justify-content-center text-center controls shadow rounded"
        >
          <div class="flex-fill">
            <div class="btn btn-info border border-dark">
              Turno
              <span class="badge">{{ this.totalRounds }}</span>
            </div>
          </div>
          <div class="flex-fill">
            <button
              class="btn btn-warning border border-dark"
              style="margin-right: 10px"
              @click="reset()"
            >
              Rigioca!
            </button>
            <button
              class="btn btn-warning border border-dark"
              style="background-color: #f77f00"
              @click="this.postScores()"
            >
              Salva il punteggio!
            </button>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RockPaperScissorView",
  data() {
    return {
      options: ["Rock", "Paper", "Scissor"],
      yourWeapon: "",
      computerWeapon: "",
      result: "",
      yourScore: 0,
      computerScore: 0,
      totalRounds: 0,
      fighting: false,
      finalPoints: 0,
      userId: "",
      userData: {},
      userPoints: {
        game: "morra cinese",
        bestScore: null,
        user: null,
      },
    };
  },
  methods: {
    getUser() {
      let key = localStorage.key(0);
      if (key != null) {
        this.userData = JSON.parse(localStorage.getItem(key));
        axios
          .get(`${this.$globalVar}/users?username=${this.userData.username}`)
          .then((response) => (this.userId = response.data[0]._id));
      }
    },
    chooseWeapon(weapon) {
      this.yourWeapon = weapon;
      this.result = "";
      this.computerWeapon = "";
    },
    fight() {
      this.fighting = true;
      this.pretendProcessing();
    },
    pretendProcessing() {
      let x = 0;
      let intervalID = setInterval(() => {
        this.computerWeapon =
          this.options[Math.floor(Math.random() * this.options.length)];

        if (++x === 10) {
          window.clearInterval(intervalID);
          this._fight();
          this.fighting = false;
        }
      }, 100);
    },
    _fight() {
      this.computerWeapon =
        this.options[Math.floor(Math.random() * this.options.length)];

      if (this.yourWeapon === this.computerWeapon) {
        this.draw();
      } else if (this.computerWeapon === "Rock") {
        if (this.yourWeapon === "Paper") {
          this.win();
        } else if (this.yourWeapon === "Scissor") {
          this.lost();
        }
      } else if (this.computerWeapon === "Paper") {
        if (this.yourWeapon === "Scissor") {
          this.win();
        } else if (this.yourWeapon === "Rock") {
          this.lost();
        }
      } else {
        if (this.yourWeapon === "Rock") {
          this.win();
        } else if (this.yourWeapon === "Paper") {
          this.lost();
        }
      }
    },
    draw() {
      this.result = "pareggio";
      this.totalRounds++;
    },
    win() {
      this.result = "vittoria";
      this.yourScore++;
      this.totalRounds++;
      this.finalPoints = this.yourScore * 5 - this.computerScore;
      if (this.finalPoints < 0) {
        this.finalPoints = 0;
      }
    },
    lost() {
      this.result = "sconfitta";
      this.computerScore++;
      this.totalRounds++;
      this.finalPoints = this.yourScore * 5 - this.computerScore;
      if (this.finalPoints < 0) {
        this.finalPoints = 0;
      }
    },
    reset() {
      this.computerScore = 0;
      this.yourScore = 0;
      this.result = "";
      this.yourWeapon = "";
      this.computerWeapon = "";
      this.totalRounds = 0;
      this.finalPoints = 0;
    },
    postScores() {
      if (this.finalPoints < 0) {
        this.finalPoints = 0;
      }
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

<style scoped>
.text {
  font-size: 18px;
}

.description__title {
  text-align: left;
  color: #7186fd;
  font-size: 40px;
  font-weight: bold;
}

.title {
  font-size: 24px;
}

.content {
  margin-top: 20px;
  width: 70%;
}

.options button {
  background-color: #7186fd;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 120px;
  margin: 20px 0px;
  transition: trasform 0.2s;
  transform: scale(1.02);
  width: 120px;
  border: none;
}

.options button:hover {
  background-color: #d1c79f;
  background-size: 65%;
}

.options button.r {
  background-image: url("../assets/rps/elefante.png"); /*rock */
  background-size: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options button.r:hover {
  background-size: 55%;
}

.options button.p {
  background-image: url("../assets/rps/topo.png"); /*paper */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options button.s {
  background-image: url("../assets/rps/gatto.png"); /*scissor */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options button.checked {
  background-color: #bfcca3;
  transform: scale(1.2);
}

.it {
  height: 120px;
  width: 120px;
}

.it div {
  background-color: #c9a185;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border-radius: 50%;
  height: 120px;
  transform: scale(1.25);
  width: 120px;
}

.it div.r {
  background-image: url("../assets/rps/elefante.png"); /*rock */
  background-size: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.it div.p {
  background-image: url("../assets/rps/topo.png"); /*paper*/
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.it div.s {
  background-image: url("../assets/rps/gatto.png"); /*scissor */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.game {
  border-radius: 50%;
  height: 120px;
  overflow: hidden;
  position: relative;
  width: 120px;
  z-index: 10;
}

.badge {
  color: #000;
}

.game .chooseWeapon,
.game .fight,
.game .fighting,
.game .result {
  align-items: center;
  background: #b4a9ff;
  color: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 2;
  border: none;
}

.game .fight {
  background: #ec3636;
  cursor: pointer;
}

.game .result.won {
  background: #46eb4b;
}

.game .result.lost {
  background: #f55858;
}

.game .result.draw {
  background: #e6db64;
}

.controls {
  background-color: #eae5c4;
  margin: 20px;
}

.controls div {
  width: 120px;
  padding: 10px;
}

.you .text,
.computer .text {
  font-size: 20px;
  margin-right: 5px;
}

.you .score,
.computer .score {
  font-size: 30px;
}
</style>
