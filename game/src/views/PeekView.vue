<template>
<div>
  <h1>Peek-a-Vue</h1>
  <section class="game-board">
    <CardComponent
      v-for="(card, index) in cardList"
      :key="`card-${index}`"
      :value="card.value"
      :visible="card.visible"
      :position="card.position"
      :matched="card.matched"
      @select-card="flipCard"
    />
  </section>
  <h2>{{ status }}</h2>
  <button @click="restartGame">restart game</button>
</div>
</template>

<script>
import _ from "lodash";
import { ref, watch, computed } from "vue";
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "PeekView",
  components: { CardComponent },
  setup() {
    const cardList = ref([]);
    const userSelection = ref([]);
    const status = computed(() => {
      if (remainigPairs.value === 0) {
        return "Player wins!";
      } else {
        return `Remaining pairs: ${remainigPairs.value}`;
      }
    });

    const remainigPairs = computed(() => {
      const remainigCards = cardList.value.filter(
        (card) => card.matched === false
      ).length;

      return remainigCards / 2;
    });

    const restartGame = () => {
      cardList.value = _.shuffle(cardList.value);

      cardList.value = cardList.value.map((card, index) => {
        return {
          ...card,
          matched: false,
          position: index,
          visible: false,
        };
      });
    };

    const cardItems = [
      "gatto",
      "cane",
      "leone",
      "criceto",
      "pappagallo",
      "zembra",
      "mucca",
      "cavallo",
    ];
    cardItems.forEach((item) => {
      cardList.value.push({
        value: item,
        visible: true,
        position: null,
        matched: false,
      });

      cardList.value.push({
        value: item,
        visible: true,
        position: null,
        matched: false,
      });
    });

    cardList.value = cardList.value.map((card, index) => {
      return {
        ...card,
        position: index,
      };
    });

    const flipCard = (payload) => {
      cardList.value[payload.position].visible = true;

      if (userSelection.value[0]) {
        if (
          userSelection.value[0].position === payload.position &&
          userSelection.value[0].faceValue === payload.faceValue
        ) {
          return;
        } else {
          userSelection.value[1] = payload;
        }
      } else {
        userSelection.value[0] = payload;
      }
    };

    watch(
      userSelection,
      (currentValue) => {
        if (currentValue.length === 2) {
          const cardOne = currentValue[0];
          const cardTwo = currentValue[1];

          if (cardOne.faceValue === cardTwo.faceValue) {
            cardList.value[cardOne.position].matched = true;
            cardList.value[cardTwo.position].matched = true;
          } else {
            setTimeout(() => {
              cardList.value[cardOne.position].visible = false;
              cardList.value[cardTwo.position].visible = false;
            }, 700);
          }

          userSelection.value.length = 0;
        }
      },
      { deep: true }
    );

    return {
      cardList,
      flipCard,
      userSelection,
      status,
      restartGame,
    };
  },
};
</script>

<style>
.game-board {
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-template-rows: repeat(4, 120px);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  justify-content: center;
}
</style>
