<template>
  <div>
    <h3 class="description__title big-text">Memory di Animal House!</h3>
    <p class="description__text">
      Il cucciolo di animale cerca la compagna! Aiuta le coppie di specie a
      trovare il loro simile.<br />Gioca tutte le volte che vuoi e affina la tua
      tecnica dell'intuizione!
    </p>
    <div v-if="this.pregame == 0">
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
      <p class="status">{{ status }}</p>
      <button class="btn" type="button" @click="restartGame()">Rigioca</button>
    </div>
    <!-- <div v-else>
      <div class="buttons">
        <button type="button" class="btn restart"></button>
        <button type="button" class="btn "></button>
      </div>
    </div> -->
  </div>
</template>

<script>
import _ from "lodash";
import { ref, watch, computed } from "vue";
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "MemoryView",
  components: { CardComponent },
  data() {
    return {
      pregame: 0,
    };
  },
  setup() {
    const cardList = ref([]);
    const userSelection = ref([]);
    const status = computed(() => {
      if (remainigPairs.value === 0) {
        return "Player wins!";
      } else {
        return `Coppie mancanti: ${remainigPairs.value}`;
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
      "aquila",
      "bradipo",
      "bruco",
      "cammello",
      "cetaceo",
      "panda",
      "salamandra",
      "zebra",
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

<style scoped>
.description__title {
  margin-top: 70px;
  color: #03045e;
}

.status {
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}

.buttons {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.buttons button {
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 15px 0;
  font-size: 16px;
  border-radius: 5px;
  width: calc(100% / 2 - 8px);
}

.game-board {
  display: grid;
  grid-template-columns: repeat(4, 130px);
  grid-template-rows: repeat(4, 130px);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  justify-content: center;
}

@media (max-width: 768px) {
  .game-board {
    grid-template-columns: repeat(2, 130px);
    grid-template-rows: repeat(8, 130px);
  }
}
</style>
