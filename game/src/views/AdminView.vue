<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div v-for="gameQuestion in this.gameQuestions" :key="gameQuestion">
      <p>{{ gameQuestion.correct_answer }}, {{ gameQuestion.question }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      gameQuestions: [],
    };
  },
  methods: {
    quiz() {
      axios
        .get("https://opentdb.com/api.php?amount=30&category=27&type=multiple")
        .then((response) => {
          this.gameQuestions = response.data.results;
          this.clean(this.gameQuestions);
        });
    },
    clean(questions) {
      for (let i = 0; i < questions.length; i++) {
        if (
          questions[i].question.includes("&") ||
          questions[i].correct_answer.includes("&")
        ) {
          console.log(
            "CANCELLA",
            questions[i].question,
            questions[i].correct_answer
          );
          questions.splice(i, 1);
        }
      }
    },
  },
  created() {
    this.quiz();
  },
};
</script>

<style></style>
