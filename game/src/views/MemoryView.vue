<template>
  <div>
    <!-- description section -->
    <section class="paragraph">
      <h1 class="description__title big-text">
        <span lang="en" xml:lang="en">Memory</span> di
        <span lang="en" xml:lang="en">Animal House</span>!
      </h1>
      <p class="description__text">
        Il cucciolo di animale cerca la compagna! Aiuta le coppie di specie a
        <em>trovare</em> il loro simile.<br />Gioca tutte le volte che vuoi e
        affina la tua tecnica dell'<em>intuizione</em>!
      </p>
    </section>
    <section class="text-center">
      <button class="btn my-3" type="button" @click="this.restartGame()">
        Inizia a giocare!
      </button>
      <h2 class="status">{{ status }}</h2>
      <main class="game-board mb-2">
        <CardComponent
          v-for="(card, index) in cardList"
          :key="`card-${index}`"
          :value="card.value"
          :visible="card.visible"
          :position="card.position"
          :matched="card.matched"
          @select-card="flipCard"
          @click="this.countClick()"
        />
      </main>
    </section>
    <section
      v-if="status == 'HAI VINTO'"
      class="text-center"
      style="margin-top: 1000px"
    >
      <p>Il tuo punteggio ammonta a {{ this.count }} punti!</p>
      <button class="btn my-3" type="button" @click="this.restartGame()">
        Salva il punteggio!
      </button>
    </section>
  </div>
</template>

<script>
import _ from "lodash";
import { ref, watch, computed } from "vue";
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "MemoryView",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countClick() {
      console.log(this.count);
      this.count++;
    },
  },
  components: { CardComponent },
  setup() {
    const cardList = ref([]);
    const userSelection = ref([]);
    const status = computed(() => {
      if (remainigPairs.value === 0) {
        return "HAI VINTO!";
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
            }, 800);
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
.btn {
  border: 1px solid black;
  color: #fff;
  background-color: #03045e;
}

.description__title {
  margin-top: 70px;
  color: #03045e;
}

.status {
  font-weight: bold;
  font-size: 20px;
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
