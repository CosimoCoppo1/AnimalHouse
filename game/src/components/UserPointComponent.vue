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
          v-for="(animal, index) in this.userAnimals"
          :key="index"
          class="text-center m-4"
        >
          <img
            :src="require(`@/assets/admin/${animal.pet.name}.png`)"
            :alt="animal.pet.name"
            width="80"
            class="rounded-circle"
            style="border: 2px solid #9e0089"
          />
          <br />
          <b style="color: #9e0089">{{ animal.petName }}</b>
          <br />
          <i v-if="animal.desc != null" class="small">"{{ animal.desc }}"</i>
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
      userId: "",
      userData: {},
      userAnimals: [],
    };
  },
  methods: {
    async getUser() {
      let key = localStorage.key(0);
      this.userData = JSON.parse(localStorage.getItem(key));
      let response = await axios.get(
        `http://localhost:8000/users?username=${this.userData.username}`
      );
      this.userId = response.data[0]._id;
    },
    async getUserPoint() {
      let response = await axios.get(
        `http://localhost:8000/scores/user/${this.userId}`
      );
      this.userAnimals = response.data;
    },
  },
  created: async function () {
    await this.getUser();
    await this.getUserPet();
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
  margin-top: 120px;
}

.buttons button {
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
    margin-top: 80px;
  }
}
</style>
