<template>
  <div class="card-container mx-auto mt-5">
    <div class="card">
      <section class="card-body">
        <h3 class="card__title">I tuoi punteggi</h3>
        <p>
          Hai fatto un salto alla sezione giochi di
          <span lang="en" xml:lang="en">Animal House</span>?<br />Se sì, qui
          troverai i tuoi migliori <span lang="en" xml:lang="en">scores</span>!
        </p>
        <hr />
        <div
          v-for="point in this.gamesPoints"
          :key="point._id"
          class="text-center m-4 game"
        >
          <b>{{ point.game }}</b>
          <br />
          <i>Miglior punteggio:</i> <span>{{ point.bestScore }}</span>
          <br />
          <i>Il punteggio è stato registrato il giorno:</i>
          <br />
          <span>{{ point.updatedAt }}</span>
        </div>
        <div class="buttons">
          <router-link
            role="button"
            class="btn btn-success"
            :to="{ path: '/giochi' }"
            >Vai ai giochi!</router-link
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserPetComponent",
  data() {
    return {
      myVar: this.$globalVar,
      userId: "",
      userData: {},
      gamesPoints: [],
    };
  },
  methods: {
    async getUser() {
      let key = localStorage.key(0);
      this.userData = JSON.parse(localStorage.getItem(key));
      let response = await axios.get(
        `${this.$globalVar}/users?username=${this.userData.username}`
      );
      this.userId = response.data[0]._id;
    },
    async getUserPoint() {
      let response = await axios.get(
        `${this.$globalVar}/scores/user/${this.userId}`
      );
      this.gamesPoints = response.data;
      for (let game of this.gamesPoints) {
        let d = new Date(game.updatedAt);
        let options = {
          weekday: "short",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        };
        game.updatedAt = d.toLocaleDateString("it-IT", options);
      }
    },
  },
  created: async function () {
    await this.getUser();
    await this.getUserPoint();
  },
};
</script>

<style scoped>
.card-container {
  width: 30rem;
  perspective: 200rem;
  position: relative;
  height: 600px;
}

.card {
  transition: all 0.9s;
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
  overflow: auto;
}

.card-body {
  border-radius: 20px;
}

.card-body p {
  text-align: center;
}

.card__title {
  color: #9e0089;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 768px) {
  .card-container {
    width: 18rem;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.buttons .btn {
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  width: auto;
  border: 1px solid #000;
  background-color: #9e0089;
}

@media (max-width: 768px) {
  .buttons {
    margin-top: 30px;
  }
}

.game b {
  text-transform: uppercase;
  font-size: 18px;
  color: #9e0089;
}

.game i {
  font-weight: bold;
}

.game span {
  color: #9e0089;
}
</style>
