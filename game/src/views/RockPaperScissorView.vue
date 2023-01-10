<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="d-flex felx-row justify-content-between">
          <div class="title">Rock . Paper . Scissor .</div>
          <div class="d-flex scores flex-row">
            <div
              class="d-flex align-items-center you mr-3 justify-content-between"
            >
              <span class="text">You</span
              ><span
                class="score font-weight-bold"
                :class="
                  this.yourScore >= this.computerScore
                    ? 'text-success'
                    : 'text-danger'
                "
                >{{ this.yourScore }}</span
              >
            </div>
            <div class="d-flex align-items-center computer">
              <span class="text">Computer</span
              ><span
                class="score font-weight-bold"
                :class="
                  this.computerScore >= this.yourScore
                    ? 'text-success'
                    : 'text-danger'
                "
                >{{ this.computerScore }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
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
              Choose your weapon
            </div>
            <div class="fight" v-if="this.yourWeapon" @click="fight()">
              FIGHT
            </div>
            <div class="fighting" v-if="this.fighting">
              <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
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
              Rounds
              <span class="badge badge-light">{{ this.totalRounds }}</span>
            </button>
          </div>
          <div class="flex-fill">
            <button class="btn btn-warning" @click="reset()">Reset</button>
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
      this.result = "draw";
      this.totalRounds++;
    },
    win() {
      this.result = "won";
      this.yourScore++;
      this.totalRounds++;
    },
    lost() {
      this.result = "lost";
      this.computerScore++;
      this.totalRounds++;
    },
    reset() {
      this.computerScore = 0;
      this.yourScore = 0;
      this.result = "";
      this.yourWeapon = "";
      this.computerWeapon = "";
      this.totalRounds = 0;
    },
  },
};
</script>

<style>
.title {
  font-size: 24px;
}

.options div {
  background-color: #e0d6af;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 120px;
  margin: 20px 0px;
  transition: trasform 0.2s;
  transform: scale(1);
  width: 120px;
}

.options div:hover {
  background-color: #d1c79f;
  background-size: 65%;
}

.options div.r {
  background-image: url("data:image/png;base64,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"); /*rock */
  background-size: 50%;
}

.options div.r:hover {
  background-size: 55%;
}

.options div.p {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPv9LYuLWALY4rWbS9gK5X39Yve73zBXjnzg&usqp=CAU"); /*paper */
}

.options div.s {
  background-image: url("data:image/png;base64,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"); /*scissor */
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
  background-image: url("data:image/png;base64,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"); /*rock */
  background-size: 50%;
}

.it div.p {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPv9LYuLWALY4rWbS9gK5X39Yve73zBXjnzg&usqp=CAU"); /*paper*/
}

.it div.s {
  background-image: url("data:image/png;base64,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"); /*scissor */
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
  background: #a39fbc;
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
  background: #a48132;
  cursor: pointer;
}

.game .result.won {
  background: #32a836;
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
  font-size: 36px;
}
</style>

<!-- 
topo - gatto - elefante

gatto > topo 
topo > elefante
elefante > gatto

-->
