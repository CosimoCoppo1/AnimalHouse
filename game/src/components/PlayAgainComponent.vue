<template>
  <div class="text-center">
    <div>
      <h3>Score: {{ this.score }}</h3>
      <h3>Best Score: {{ this.record }}</h3>
    </div>
    <div>
      <button class="btn btn-secondary mt-4" @click="$emit('play-again')">
        Play
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayAgainComponent",
  props: ["score", "record"],
};
</script>

<style>
h3 {
  margin: 0;
}
</style>
