<template>
  <div class="card-container mx-auto mt-5">
    <div class="card">
      <section class="card-body">
        <h3 class="card__title">Registra Animale</h3>
        <p>Divertiti ad inserire dati relativi al tuo animale!</p>
        <hr />
        <form @submit="postData" method="post">
          <label for="choose-pet" class="small fw-bold mt-2"
            >A che categoria appartiene il tuo animale?</label
          >
          <div class="input-group mt-3">
            <select
              id="choose-pet"
              class="form-select fw-bold"
              required
              name="animal category"
              v-model="this.chooseCategory"
            >
              <option
                v-for="(category, index) in this.categories"
                :key="index"
                :value="index"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group mt-4">
            <label for="formPetNameP" class="small mb-3">
              <b>Come si chiama?</b>
            </label>
            <input
              type="text"
              id="formPetNameP"
              class="form-control"
              placeholder="cucciolone"
              name="user petName"
              v-model="userpet.petName"
              required
            />
          </div>
          <div class="form-group mt-4">
            <label for="formDescriptionP" class="small mb-3">
              <b>
                Parlaci dei suoi giochi e dei suoi cibi preferiti, la sua razza
                e il suo sesso, le sue condizioni mediche e tanto altro...
              </b>
            </label>
            <textarea
              id="formDescriptionP"
              class="form-control"
              placeholder="raccontaci del tuo cucciolone..."
              name="user description"
              v-model="userpet.desc"
            ></textarea>
          </div>
          <div class="buttons">
            <button type="submit" class="btn btn-success">
              Registra l'animale!
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterPetComponent",
  data() {
    return {
      myVar: [this.$globalVar, this.$keyName],
      userpet: {
        user: null,
        pet: null,
        petName: null,
        desc: null,
      },
      chooseCategory: 0,
      categories: {},
      userData: {},
      userAnimals: [],
    };
  },
  methods: {
    async getPets() {
      let response = await axios.get(`${this.$globalVar}/pets`);
      this.categories = response.data;
    },
    async getUser() {
      this.userData = JSON.parse(localStorage.getItem(this.$keyName));
      let response = await axios.get(
        `${this.$globalVar}/users?username=${this.userData.username}`
      );
      this.userpet.user = response.data[0]._id;
    },
    postData(e) {
      this.userpet.pet = this.categories[this.chooseCategory]._id;
      axios
        .post(`${this.$globalVar}/userPet/register`, this.userpet)
        .then((response) => {
          if (response.status == 200) {
            alert("Registrazione dell'animale avvenuta con successo!");
            this.userpet.pet = null;
            this.userpet.petName = null;
            this.userpet.desc = null;
            this.chooseCategory = 0;
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Registrazione animale negata... Qualcosa è andato storto");
          this.userpet.pet = null;
          this.userpet.petName = null;
          this.userpet.desc = null;
          this.chooseCategory = 0;
        });
      e.preventDefault();
    },
    async getUserPet() {
      let response = await axios.get(
        `${this.$globalVar}/userPet/user/${this.userpet.user}`
      );
      this.userAnimals = response.data;
    },
  },
  created: async function () {
    await this.getPets();
    await this.getUser();
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
  margin-top: 100px;
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
    margin-top: 23px;
  }
}
</style>
