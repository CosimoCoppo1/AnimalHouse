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
          <a href="#"
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

    <!-- poster section -->
    <!--
    <div
      class="poster container"
      v-for="(animal, index) in this.pets"
      :key="index"
    >
      <div class="poster__content">
        <h3 class="poster__title">{{ animal.name }}</h3>
        <p>{{ this.posters[index].description }}</p>
        <button
          @click="this.getPetSections(`${index}`, `${pet._id}`)"
          :style="this.whatPet(`${index}`) != '' ? 'display: none' : ''"
        >
          Sezioni dedicate:
        </button>
        <span v-if="this.whatPet(`${index}`) != ''">
          <div v-for="section in this.whatPet(`${index}`)" :key="section">
            <p>{{ section.name }}</p>
          </div>
        </span>
        <a href="#">
          <button type="button" class="btn btn-success">
            Inizia gli acquisti!
          </button>
        </a>
      </div>
      <div class="poster__img">
         <img
          :src="require(`@/assets/shop/${this.posters[index].img}`)"
          alt=".."
        /> 
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/bg-video.jpg"
                class="d-block w-100"
                alt="..."
              />
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

    <div v-for="product in this.products" :key="product">
      <div class="card" v-if="`${animal.name}` == `${product.pet.name}`">
        <img :src="product.img" alt=".." />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <h6 class="text-muted">{{ product.price }}€</h6>
          <p class="card-text">{{ product.description }}</p>
          <a href="#">
            <button type="button" class="btn btn-success border">
              Compra!
            </button></a
          >
        </div>
      </div>
    </div>

    <div v-for="animal in this.pets" :key="animal">
      <p>{{ animal.name }}</p>
      <div v-for="product in this.products" :key="product">
        <p v-if="`${animal.name}` == `${product.pet.name}`">
          {{ product.title }}, {{ product.price }}, {{ product.description }}
        </p>
        <br />
      </div>
    </div>
	-->

    <!--
            acquista con fiducia.

      Ci impegnamo per la soddsfazione dle cliente. date un'occhiata alle fantastiche recenzsioni su nostri prodotti.
      
      #feelgood
    -->
    <!-- <div class="container">
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
        align="center"
      >
        <div v-for="(product, index) in this.products" :key="index" class="col">
          <div class="card">
            <img src="../assets/shop/accessoricane1.png" alt=".." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <h6 class="text-muted">{{ product.price }}€</h6>
              <p class="card-text">{{ product.description }}</p>
              <a href="#">
                <button type="button" class="btn btn-success border">
                  Compra!
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- cani -->
    <!-- pesci -->
    <!--<div>
      <p>Name: {{ this.pets[3].name }}</p>
      <button
        @click="this.getPetProduct(3, this.pets[3]._id)"
        :style="this.Pesci != '' ? 'display: none' : ''"
      >
        Prodotti pesci
      </button>
      <span v-if="this.Pesci != ''">
        <div v-for="singleProduct in this.Pesci" :key="singleProduct">
          <p>{{ singleProduct.title }}</p>
          <p>{{ singleProduct.description }}</p>
          <p>{{ singleProduct.price }}</p>
        </div>
      </span>
    </div>-->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShopView",
  data() {
    return {
      pets: [],
      sections: {},
      products: {},
    };
  },
  methods: {
    async getPets() {
      let response = await axios.get("http://localhost:8000/pets");
      this.pets = response.data;
      console.log(this.pets);
    },
    async getPetSections() {
      for (let pet of this.pets) {
        let response = await axios.get(
          `http://localhost:8000/sections?pet=${pet._id}`
        );
        this.sections[pet._id] = response.data;
      }
      console.log(this.sections);
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
      console.log(this.products);
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
