<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">che fame da lupi!</p>
        <h1 class="big-text">Negozio online</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/shop/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          Benvenuti nella sezione <b>negozio</b> di Animal House! Amate i vostri
          animali domestici... e dimostratelo dandogli solamente prodotti di
          <b>prima qualità</b>, come quelli che trovate a questa pagina.<br />Il
          vostro animale domestico merita il <b>meglio</b>.
        </p>
      </div>
    </div>

    <!--descrition section -->
    <div class="grid">
      <div class="col">
        <h3 class="description__title big-text">
          Scopri i prodotti per cani, gatti e tanto altro!
        </h3>
        <p class="description__text">
          <b>Affidatevi a chi ci mette il cuore</b>: ci impegnamo a fornirvi i
          migliori prodotti per animali domestici. Ti offriamo un'esperienza di
          acquisto eccellente poichè la soddisfzione dei nostri clienti è molto
          importante per noi.<br />Abbiamo la combinazione perfetta tra i
          migliori prodotti e la nostra semplice pratica di acquisto: passa
          all'area
          <a href="http://localhost:8000/frontoffice/e-commerce"
            ><button type="button" class="btn btn-success">VIP</button></a
          >
          per effettuare istantaniamente gli ordini .<br />
        </p>
        <p class="mt-1 description__title">
          Ci assicureremo che riceviate il vostro ordine con piena
          soddisfazione!
        </p>
      </div>
    </div>

    <!-- carousel section -->
    <div class="poster container" v-for="pet in this.pets" :key="pet">
      <div class="poster__img">
        <h2>ciao</h2>
      </div>
      <div class="poster__content">
        <h3 class="poster__title">{{ pet.name }}</h3>
        <p class="description__text">Vedi le sezioni dedicate:</p>
        <div v-for="section in this.sections[pet._id]" :key="section">
          {{ section.name }}
        </div>
        <a href="http://localhost:8000/frontoffice/e-commerce">
          <button type="button" class="btn btn-success">Vai al negozio!</button>
        </a>
      </div>
    </div>

    <div v-for="pet in this.pets" :key="pet">
      {{ pet.name }}
      <div v-for="section in this.sections[pet._id]" :key="section">
        <button>{{ section.name }}</button>
        <div
          id="carouselExampleControls"
          class="carousel slide carousel-dark"
          data-interval="false"
        >
          <div
            class="carousel-inner"
            v-for="(product, index) in this.products[section._id]"
            :key="index"
          >
            <div class="carousel-item" :class="index == 0 ? 'active' : ''">
              <!-- inizio card -->
              <div class="card">
                <img
                  src="../assets/about/team2.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <!-- fine card -->
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <!-- prova -->
    <div v-for="pet in this.pets" :key="pet">
      {{ pet.name }}
      <div class="input-group">
        <select class="form-select" v-model="this.showSection[pet._id]">
          <option
            v-for="(section, index) in this.sections[pet._id]"
            :key="index"
            :value="index"
          >
            {{ section.name }}
          </option>
        </select>
      </div>
      <p>value: {{ this.sections[pet._id][this.showSection[pet._id]].name }}</p>
      <div
        v-for="product in this.products[
          this.sections[pet._id][this.showSection[pet._id]]._id
        ]"
        :key="product"
      >
        {{ product.title }}
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShopView",
  data() {
    return {
      pets: [],
      showSection: {},
      sections: {},
      products: {},
    };
  },
  methods: {
    async getPets() {
      let response = await axios.get("http://localhost:8000/pets");
      this.pets = response.data;
      for (let pet of this.pets) {
        this.showSection[pet._id] = 0;
      }
      console.log(this.showSection);
    },
    async getPetSections() {
      for (let pet of this.pets) {
        let response = await axios.get(
          `http://localhost:8000/sections?pet=${pet._id}`
        );
        this.sections[pet._id] = response.data;
      }
    },
    async getProductsSection() {
      for (let keyValue of Object.entries(this.sections)) {
        let petSections = keyValue[1];
        for (let section of petSections) {
          let response = await axios.get(
            `http://localhost:8000/products?section=${section._id}`
          );
          this.products[section._id] = response.data;
        }
      }
    },
    changeSection(petId, index) {
      console.log("indice", index);
      console.log("sezione", this.showSection[`${petId}`]);
    },
  },
  created: async function () {
    await this.getPets();
    await this.getPetSections();
    await this.getProductsSection();
  },
};
</script>

<style>
.btn {
  color: #fff;
  border: 1px solid black;
  background-color: #5e5e5e;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content p {
  color: #17df53;
}

/* description section */
.description__title,
.link {
  color: #17df53;
}

/* card section */
.card {
  width: 20rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 20px;
  background-color: #bdd5ea;
}

/* poster section */
.poster {
  display: flex;
  height: 70vh;
  width: 100%;
  align-items: center;
}

.poster__title {
  font-size: 38px;
  font-weight: bold;
  color: #17df53;
}

.poster__img {
  width: 65%;
  height: 100%;
}

.poster__img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.poster__content {
  width: 35%;
  padding: 50px;
}

@media (max-width: 768px) {
  .poster {
    flex-wrap: wrap;
    height: auto;
  }

  .poster__img,
  .poster__content {
    width: 100%;
  }
}
</style>

<!-- <div v-for="pet in this.pets" :key="pet">
      {{ pet.name }}
      <div v-for="section in this.sections[pet._id]" :key="section">
        {{ section.name }}
      </div>
      <hr />
    </div> -->

<!-- <div v-for="pet in this.pets" :key="pet">
      <div v-for="section in this.sections[pet._id]" :key="section">
        <div v-for="product in this.products[section._id]" :key="product">
          {{ product.title }}
        </div>
      </div>
</div> -->
