<template>
  <button class="card" @click="selectCard">
    <div v-if="visible" class="card-face is-front">
      <img
        :src="require(`@/assets/memory/${value}.png`)"
        :alt="value"
        style="width: 90%"
      />
    </div>
    <div v-else class="card-face is-back">
      <span hidden>clicca</span>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      required: true,
    },
    matched: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const selectCard = () => {
      context.emit("select-card", {
        position: props.position,
        faceValue: props.value,
      });
    };

    return { selectCard };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  border: none;
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-face.is-front {
  background: #fefae0;
  color: #fff;
  border: 2px solid #03045e;
}

.card-face.is-back {
  background: #03045e;
  color: #fff;
}
</style>
