<template>
  <div>
    <div
      v-if="this.status === 'beginning'"
      class="height-100 d-flex justify-content-center align-items-center"
    >
      <StartComponent @start-game="startGame" />
    </div>
    <div
      v-if="this.status === 'gaming'"
      class="height-100 d-flex justify-content-center align-items-center"
    >
      <GameComponent :size="this.size" @stop-game="stopGame" />
    </div>
    <div
      v-if="this.status === 'stopping'"
      class="height-100 d-flex justify-content-center align-items-center"
    >
      <PlayAgainComponent
        :score="this.score"
        :record="this.record"
        @play-again="playAgain"
      />
    </div>
  </div>
</template>

<script>
import StartComponent from "../components/StartComponent.vue";
import GameComponent from "../components/GameComponent.vue";
import PlayAgainComponent from "../components/PlayAgainComponent.vue";

export default {
  name: "PuzzleView",
  components: {
    StartComponent,
    GameComponent,
    PlayAgainComponent,
  },
  data() {
    return {
      size: 3,
      status: "beginning",
      score: 0,
      record: Infinity,
    };
  },
  methods: {
    startGame(size) {
      this.size = size;
      this.status = "gaming";
    },
    stopGame(score) {
      this.status = "stopping";
      this.score = score;

      if (this.score < this.record) this.record = this.score;
    },
    playAgain() {
      this.status = "gaming";
    },
  },
};
</script>

<style>
.height-100 {
  height: 100vh;
}
</style>
