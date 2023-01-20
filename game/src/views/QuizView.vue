<template>
  <div class="quiz">
    <div class="quiz-container">
      <div class="title-container">
        <h1 class="title">Simple Quiz</h1>
        <div class="question-container">
          <div v-if="this.index < this.count">
            <p class="question">{{ this.questions[this.index].question }}</p>
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
                class="button-style"
                v-show="
                  this.selectedAnswer !== '' && this.index < this.count - 1
                "
                @click="nextQuestion()"
              >
                Next &gt;
              </button>
              <button
                class="button-style"
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
              <button class="button-style" @click="resetQuiz()">
                Play again
              </button>
              <button class="button-style" @click="sendResults()">
                Send Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizView",
  data() {
    return {
      selectedAnswer: "",
      index: 0,
      count: 3,
      correctAnswers: 0,
      wrongAnswers: 0,
      questions: [
        {
          question:
            "Rolex is a company that specializes in what type of product?",
          answers: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
          correctAnswer: "b",
        },
        {
          question: "When did Facebook launch?",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question:
            "Albert Einstein had trouble with mathematics when he was in school",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
      ],
    };
  },
  methods: {
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
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
    sendResults() {},
  },
};
</script>

<style>
.quiz {
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
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.options-container {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 0.5rem;
  border-color: #d1d5db;
  border-style: solid;
}

.single-option {
  display: none;
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

.button-section {
  display: flow-root;
  margin-top: 1.5rem;
}

.button-style {
  float: right;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  border-radius: 9999px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
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
