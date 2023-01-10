<!--
<template>
  <div
    v-if="this.status === 'beginning'"
  >
    <StartScrambleComponent @start-game="startGame" />
  </div>
  <div
    v-if="this.status === 'gaming'"
  >
    <GameScrambleComponent @stop-game="stopGame" />
  </div>
  <div
    v-if="this.status === 'stopping'"
  >
    <StopScrambleComponent
      :score="this.score"
      :record="this.record"
      @play-again="playAgain"
    />
  </div>
</template>

<script>
import StartScrambleComponent from "../components/ScrambleGame/StartScrambleComponent.vue";
import GameScrambleComponent from "../components/ScrambleGame/GameScrambleComponent.vue";
import StopScrambleComponent from "../components/ScrambleGame/StopScrambleComponent.vue";

export default {
  name: "ScrambleView",
  data () {
    return {
      status: "beginning",
      score: 0,
      record: 0,
    };
  },
  components: {
    StartScrambleComponent,
    GameScrambleComponent,
    StopScrambleComponent,
  },
  methods: {
    startGame() {
      this.status = "gaming";
    },
    stopGame(score) {
      this.status = "stopping";
      this.score = score;

      if (this.score < this.record) this.record = this.score;
    },
    playAgain(status) {
      if (status === "beginning") {
        this.score = 0;
      } 
      this.status = status;
    },
  },
};
</script>

<style>

</style>
-->

<template>
  <div class="body">
    <div class="container">
      <h2>Word Scramble</h2>
      <div class="content">
        <p class="word">{{ this.scramble.text }}</p>
        <div class="details">
          <p class="hint">
            Hint: <span>{{ this.scramble.hint }}</span>
          </p>
          <p class="time">
            Time left:
            <span
              ><b>{{ this.timerCount }}</b
              >s</span
            >
          </p>
        </div>
        <input
          v-model="answer"
          :maxlength="this.maxLength"
          type="text"
          placeholder="Enter a valid word"
        />
        <div class="buttons">
          <button class="refresh-word" @click="refreshWord()">
            Refresh Word
          </button>
          <button class="check-word" @click="checkWord()">Check Word</button>
        </div>
        <p>
          <span v-if="this.timerMessage !== 0">{{ this.message }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrambleView",
  data() {
    return {
      words: [
        { word: "addition", hint: "the process of adding numbers" },
        { word: "meeting", hint: "event in which people come together" },
        { word: "number", hint: "math symbol used for counting" },
        { word: "exchange", hint: "teh act of trading" },
        { word: "canvas", hint: "piece of fabric for oil painting" },
        { word: "garden", hint: "space for planting flowers and plant" },
        { word: "addition", hint: "the process of adding numbers" },
        { word: "addition", hint: "the process of adding numbers" },
      ],
      scramble: [{ text: "", hint: "" }],
      answer: "",
      correctWord: "",
      message: "",
      point: 0,
      malus: 0,
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
    initGame() {
      let randomObj = this.words[Math.floor(Math.random() * this.words.length)];
      let wordArray = randomObj.word.split("");

      for (let i = 0; i < wordArray.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = tmp;
      }

      this.scramble.text = wordArray.join("");
      this.scramble.hint = randomObj.hint;
      this.correctWord = randomObj.word.toLowerCase();
      this.maxLength = this.correctWord.length;
    },
    refreshWord() {
      this.scramble.text = "";
      this.scramble.hint = "";
      this.answer = "";
      this.correctWord = "";
      this.timerCount = 30;
      this.initGame();
    },
    checkWord() {
      if (!this.answer) {
        this.message = "Please enter a word check";
      } else if (this.answer !== this.correctWord) {
        this.message = "Oops! It's not the correct word";
        this.malus--;
        this.answer = "";
        this.timerMessage = 2;
      } else {
        this.point++;
        this.refreshWord();
      }
    },
    stopGame() {
      this.answer = "";
      this.message = "Oops! Time is up and you have not guessed the word";
      this.timerMessage = 2;
      this.malus = this.malus - 4;
      this.refreshWord();
    },
  },
  created() {
    this.initGame();
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
