<template>
  <div class="container">
    <div class="grid" style="margin-top: 70px">
      <div class="col">
        <h3 class="description__title">Morra cinese?</h3>
        <p class="text">
          Sei sicuro di stare giocando alla vera morra cinese?<br />
          Sorprendentemente <b>sì</b>! Divertiti a giocare alla
          <b>morra cinese</b>
          a tema animale di Animal House. Dimentica il classico sasso, carta e
          forbice e usa l'<b>elefante</b> per schiacciare il <b>gatto</b>, il
          <b>gatto</b> per mangiare il <b>topo</b> e il <b>topo</b> per
          spaventare l'<b>elefante</b>.
        </p>
      </div>
    </div>
    <div class="row content">
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
              :class="this.finalPoints < 0 ? 'text-danger' : 'text-warning'"
            >
              {{ this.finalPoints }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- reset area -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="d-flex flex-row justify-content-between align-items-center">
          <div class="options">
            <div
              class="r"
              :class="this.yourWeapon === 'Rock' ? 'checked' : ''"
              @click="chooseWeapon('Rock')"
            ></div>
            <div
              class="p"
              :class="this.yourWeapon === 'Paper' ? 'checked' : ''"
              @click="chooseWeapon('Paper')"
            ></div>
            <div
              class="s"
              :class="this.yourWeapon === 'Scissor' ? 'checked' : ''"
              @click="chooseWeapon('Scissor')"
            ></div>
          </div>
          <div class="game">
            <div class="chooseWeapon" v-if="!this.yourWeapon">
              Scegli il tuo animale
            </div>
            <div class="fight" v-if="this.yourWeapon" @click="fight()">
              SFIDA!
            </div>
            <div class="fighting" v-if="this.fighting">
              <div class="spinner-border text-danger" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
            <div class="result" :class="this.result" v-if="this.result">
              {{ this.result }}
            </div>
          </div>
          <div class="it">
            <div v-show="this.computerWeapon === 'Rock'" class="r"></div>
            <div v-show="this.computerWeapon === 'Paper'" class="p"></div>
            <div v-show="this.computerWeapon === 'Scissor'" class="s"></div>
          </div>
        </div>
        <div
          class="d-flex flex-row justify-content-center text-center controls shadow rounded"
        >
          <div class="flex-fill">
            <button type="button" class="btn btn-info">
              Turno
              <span class="badge badge-light">{{ this.totalRounds }}</span>
            </button>
          </div>
          <div class="flex-fill">
            <button class="btn btn-warning" @click="reset()">Rigioca</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
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
      this.finalPoints = this.yourScore * 2 - this.computerScore;
    },
    lost() {
      this.result = "sconfitta";
      this.computerScore++;
      this.totalRounds++;
      this.finalPoints = this.yourScore * 2 - this.computerScore;
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

.options div {
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
}

.options div:hover {
  background-color: #d1c79f;
  background-size: 65%;
}

.options div.r {
  background-image: url("../assets/rps/elefante.png"); /*rock */
  background-size: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options div.r:hover {
  background-size: 55%;
}

.options div.p {
  background-image: url("../assets/rps/topo.png"); /*paper */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options div.s {
  background-image: url("../assets/rps/gatto.png"); /*scissor */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options div.checked {
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

.game .chooseWeapon,
.game .fight,
.game .fighting,
.game .result {
  align-items: center;
  background: #b4a9ff;
  color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 2;
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
