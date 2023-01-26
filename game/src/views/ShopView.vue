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
    <div
      class="container mt-5"
      style="width: 70%"
      v-for="pet in this.pets"
      :key="pet"
    >
      <div class="row justify-content-between mb-5">
        <div class="col-12 col-lg-6 text-center" style="height: 500px">
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
                <div class="card-container">
                  <div class="card">
                    <div class="card__image">
                      <img :src="product.image" alt=".." />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{ product.title }}</h5>
                      <h6 class="text-muted">{{ product.price }}€</h6>
                      <p class="card-text" v-html="product.description"></p>
                      <a href="#" class="btn btn-success">Compra!</a>
                    </div>
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
        <div class="col-12 col-lg-4 p-5">
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
              @click="this.showProduct[pet._id] = 0"
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
    maxSectionProduct(petId) {
      return this.products[this.sections[petId][this.showSection[petId]]._id]
        .length;
    },
    goPrev(petId) {
      if (this.showProduct[petId] != 0) {
        this.showProduct[petId]--;
      }
    },
    goNext(petId) {
      let maxProducts = this.maxSectionProduct(petId);
      console.log(maxProducts);
      if (this.showProduct[petId] < maxProducts - 1) {
        this.showProduct[petId]++;
      }
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
  background-color: #7bd197;
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
.card-container {
  height: 450px;
  width: 80%;
}

.card-title {
  color: #17df53;
  font-style: bold;
  font-size: 18px;
}

.card {
  left: 12.5%;
  border: 1.5px solid;
  height: 440px;
}

.card-body {
  border-radius: 20px;
}

.card-text {
  white-space: nowrap;
  overflow: hidden;
  width: 350px;
  height: 40px;
  text-overflow: ellipsis;
}

.card__image {
  height: 250px;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .card-container {
    width: 100%;
  }

  .card {
    left: 0%;
  }
}
</style>
