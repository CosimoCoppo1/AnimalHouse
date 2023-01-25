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

    <!-- <div v-for="pet in this.pets" :key="pet">
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
              inizio card
              <div class="card">
                <img
                  :src="product.image"
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
              fine card
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
    </div> -->

    <!-- carousel section -->
    <div
      class="container mt-5"
      style="border: 1px solid red"
      v-for="pet in this.pets"
      :key="pet"
    >
      <div
        class="row justify-content-between mb-5"
        style="border: 1px solid blue"
      >
        <div
          class="col-12 col-lg-6 text-center"
          style="border: 1px solid yellow"
        >
          <!-- <div class="card">
            <img class="card-img-top" src="../assets/about/team1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div> -->
          <!-- inizio carousel -->
          <div
            :id="`carouselControls${pet._id}`"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(product, index) in this.products[
                  this.sections[pet._id][this.showSection[pet._id]]._id
                ]"
                :key="index"
                :class="index == this.showProduct[pet._id] ? 'active' : ''"
              >
                <!-- inizio card -->
                <div class="card">
                  <img :src="product.image" alt=".." />
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <!-- fine card -->
              </div>
            </div>
            <a
              class="carousel-control-prev"
              :href="`#carouselControls${pet._id}`"
              role="button"
              data-slide="prev"
              @click="this.goPrev(`${pet._id}`)"
            >
              <span
                class="carousel-control-prev-icon bg-dark"
                aria-hidden="true"
              ></span>
              <span class="sr-only"></span>
            </a>
            <a
              class="carousel-control-next"
              :href="`#carouselControls${pet._id}`"
              role="button"
              data-slide="next"
              @click="this.goNext(`${pet._id}`)"
            >
              <span
                class="carousel-control-next-icon bg-dark"
                aria-hidden="true"
              ></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <!-- fine carousel -->
        </div>
        <div class="col-12 col-lg-4 p-5" style="border: 1px solid yellow">
          <h4 class="fw-bold">Prodotti per {{ pet.name }}</h4>
          <p>
            Scegli la categoria prodotti dal menù a tendina e visualizza i
            prodotti nel catalogo!<br />Per accedere al carrello e acquistare
            passa alla sezione
            <a href="http://localhost:8000/frontoffice/e-commerce">
              <button type="button" class="btn btn-success fw-bold">
                VIP
              </button></a
            >
            di Animal House ora.
          </p>
          <div class="input-group mt-3">
            <select
              class="form-select fw-bold"
              v-model="this.showSection[pet._id]"
            >
              <option
                v-for="(section, index) in this.sections[pet._id]"
                :key="index"
                :value="index"
              >
                {{ section.name }}
              </option>
            </select>
          </div>
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
      showProduct: {},
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
        this.showProduct[pet._id] = 0;
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
    goPrev(petId) {
      this.showProduct[petId]--;
    },
    goNext(petId) {
      this.showProduct[petId]++;
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
  font-size: 13px;
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
/* .card-container {
  width: 18rem;
  perspective: 200rem;
  position: relative;
  height: 360px;
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

.card__image {
  text-align: center;
  margin-top: 40px;
  border-radius: 0%;
  padding: 5px;
}

.card__image img {
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  text-align: center;
  border: 2px solid black;
}

.card__image img:hover {
  scale: 1.05;
}

.card__body h5 {
  text-align: center;
  margin: 15px auto;
  font-weight: 900;
  font-size: 25px;
}

.card__body p {
  margin: auto 25px;
} */
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
