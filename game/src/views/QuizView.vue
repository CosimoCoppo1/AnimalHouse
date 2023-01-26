<template>
  <div class="quiz-container">
    <div>
      <h3 class="title">Simple Quiz</h3>
      <div class="question-container">
        <div v-if="this.index == -1">
          <p class="description__text">
            Benvenuto nella sezione <b>QUIZ</b> sugli animali!<br />
            Divertiti a imparare ogni giorno nuove cuorisità e testare i tuoi
            miglioramenti.<br />Clicca il pulsante per iniziare.
          </p>
          <button
            type="button"
            @click="initGame()"
            class="btn button-style btn-danger"
          >
            Gioca!
          </button>
        </div>
        <div v-else-if="this.index < this.count">
          <p
            v-html="this.questions[this.index].question"
            class="description__text fw-bold"
          ></p>
          <label
            :for="key"
            class="options-container"
            v-for="(answer, key) in this.questions[this.index].answers"
            :key="answer"
            :class="
              this.selectedAnswer === ''
                ? 'option-selected'
                : `option-${selectClass(key, this.index)}`
            "
          >
            <input
              type="radio"
              :id="key"
              class="single-option"
              :value="key"
              @change="answered($event)"
              :disabled="this.selectedAnswer !== ''"
            />
            {{ answer }}
          </label>
          <div class="button-section">
            <button
              class="btn button-style btn-danger"
              v-show="this.selectedAnswer !== '' && this.index < this.count - 1"
              @click="nextQuestion()"
            >
              Next &gt;
            </button>
            <button
              class="btn button-style btn-danger"
              v-show="
                this.selectedAnswer !== '' && this.index === this.count - 1
              "
              @click="showResults()"
            >
              Finish &gt;
            </button>
          </div>
        </div>
        <div v-else class="results-title">
          Results:
          <div class="results-points">
            <p>
              Correct Answers:
              <span class="correct-answers">{{ this.correctAnswers }}</span>
            </p>
            <p>
              Wrong Answers:
              <span class="wrong-answers">{{ this.wrongAnswers }}</span>
            </p>
          </div>
          <div class="restart-section">
            <button class="btn button-style btn-danger" @click="resetQuiz()">
              Play again
            </button>
            <button class="btn button-style btn-danger" @click="sendResults()">
              Send Results
            </button>
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
      selectedAnswer: "",
      index: -1,
      count: 3,
      correctAnswers: 0,
      wrongAnswers: 0,
      questions: [],
    };
  },
  methods: {
    getQuestions() {
      axios
        .get("http://localhost:8000/questions")
        .then((response) => (this.questions = response.data));
      this.count = 10;
    },
    initGame() {
      this.index++;
    },
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer === this.questions[this.index].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    selectClass(key, num) {
      if (key === this.questions[num].correctAnswer) {
        return "correct";
      }
      if (this.selectedAnswer === key) {
        return "incorrect";
      }
    },
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
    },
    showResults() {
      this.index++;
    },
    resetQuiz() {
      this.index = -1;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.questions = [];
      this.getQuestions();
    },
    sendResults() {},
  },
  created() {
    this.getQuestions();
  },
};
</script>

<style>
.quiz-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.title {
  color: #fecaca;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
}

.question-container {
  padding: 3rem;
  margin-top: 20px;
  background-color: #ffffff;
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.options-container {
  display: block;
  padding: 10px;
  margin-top: 20px;
  font-size: 18px;
  border: 1px solid #fecaca;
  border-radius: 20px;
}

.single-option {
  display: none;
}

.option-selected:hover {
  background-color: #fecaca;
  cursor: pointer;
}

.option-correct {
  background-color: #a7f3d0;
}

.option-incorrect {
  background-color: #fecaca;
}

.button-section {
  display: flow-root;
  margin-top: 1.5rem;
}

.button-style {
  float: right;
  background-color: #fecaca;
  font-size: 17px;
  font-weight: bold;
  border: 1px solid black;
}

.results-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.results-points {
  display: flex;
  margin-top: 1.5rem;
  margin-left: 1rem;
  justify-content: flex-start;
}

.correct-answers {
  color: #047857;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.wrong-answers {
  color: #b91c1c;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.restart-section {
  display: flow-root;
  margin-top: 1.5rem;
}
</style>
