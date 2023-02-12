<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">che fame da lupi!</h1>
        <h2 class="big-text">Negozio online</h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/shop/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          Benvenuti nella sezione <b>negozio</b> di
          <span lang="en" xml:lang="en">Animal House</span>! Amate i vostri
          animali domestici... e <em>dimostratelo</em> dandogli solamente
          prodotti di <b>prima qualità</b>, come quelli che trovate a
          <em>questa pagina</em>.<br />Il vostro animale domestico merita il
          <b><em>meglio</em></b
          >.
        </p>
      </div>
    </section>

    <!--descrition section -->
    <main>
      <section class="grid">
        <div class="col">
          <h3 class="description__title big-text">
            Scopri i prodotti per cani, gatti e tanto altro!
          </h3>
          <p class="description__text">
            <b><em>Affidatevi</em> a chi ci mette il cuore</b>: ci impegnamo a
            fornirvi i <em>migliori prodotti</em> per animali domestici. Ti
            offriamo un'esperienza di acquisto eccellente poichè la
            <em>soddisfazione</em> dei nostri clienti è molto importante per
            noi.<br />Abbiamo la <em>combinazione perfetta</em> tra i migliori
            prodotti e la nostra semplice pratica di acquisto: passa all'area
            <a
              :href="`${this.$globalVar}/frontoffice/e-commerce`"
              role="button"
              class="btn btn-success"
            >
              clienti</a
            >
            per effettuare istantaneamente gli ordini .<br />
          </p>
          <p class="mt-1 description__title">
            Ci assicureremo che riceviate il vostro ordine con piena
            soddisfazione!
          </p>
        </div>
      </section>

      <!-- carousel section -->
      <article
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
              <div class="carousel-inner" v-if="this.viewProducts">
                <div
                  class="carousel-item"
                  v-for="(product, index) in this.products[
                    this.sections[pet._id][this.showSection[pet._id]]._id
                  ]"
                  :key="index"
                  :class="index == this.showProduct[pet._id] ? 'active' : ''"
                >
                  <!-- inizio card -->
                  <section class="card-container">
                    <div class="card">
                      <div class="card__image">
                        <img :src="product.image" alt="" />
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">{{ product.title }}</h4>
                        <h5 class="text-muted">{{ product.price }}€</h5>
                        <p class="card-text" v-html="product.description"></p>
                        <a
                          :href="`${this.$globalVar}/frontoffice/products/${product._id}`"
                          role="button"
                          class="btn btn-success"
                          >Compra!</a
                        >
                      </div>
                    </div>
                  </section>
                  <!-- fine card -->
                </div>
              </div>
              <button
                class="carousel-control-prev"
                role="button"
                :href="`#carouselControls${pet._id}`"
                data-slide="prev"
                @click="this.goPrev(`${pet._id}`)"
              >
                <span
                  class="carousel-control-prev-icon bg-dark"
                  aria-hidden="false"
                ></span>
                <span class="sr-only"></span>
              </button>
              <button
                class="carousel-control-next"
                role="button"
                :href="`#carouselControls${pet._id}`"
                data-slide="next"
                @click="this.goNext(`${pet._id}`)"
              >
                <span
                  class="carousel-control-next-icon bg-dark"
                  aria-hidden="false"
                ></span>
                <span class="sr-only"></span>
              </button>
            </div>
            <!-- fine carousel -->
          </div>

          <!-- description section -->
          <section class="col-12 col-lg-4 p-5">
            <h4 class="fw-bold">Prodotti per {{ pet.name }}</h4>
            <p>
              Per accedere al carrello e
              <em>acquistare</em>
              passa alla sezione
              <a
                :href="`${this.$globalVar}/frontoffice/e-commerce`"
                role="button"
                class="btn btn-success fw-bold"
              >
                clienti
              </a>
              di <span lang="en" xml:lang="en">Animal House</span> ora.
            </p>
            <p>
              <label :for="`select-category${pet.name}`"
                >Scegli la categoria prodotti dal menù a tendina e visualizza i
                prodotti nel catalogo!</label
              >
            </p>
            <div class="input-group mt-3" v-if="this.viewSections">
              <select
                :id="`select-category${pet.name}`"
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
          </section>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShopView",
  data() {
    return {
      myVar: this.$globalVar,
      pets: [],
      showSection: {},
      showProduct: {},
      sections: {},
      products: {},
      viewSections: false,
      viewProducts: false,
    };
  },
  methods: {
    /* GET animali memorizzati per servizi/negozio in Animal House */
    async getPets() {
      let response = await axios.get(`${this.$globalVar}/pets`);
      this.pets = response.data;
      for (let pet of this.pets) {
        this.showSection[pet._id] = 1;
        this.showProduct[pet._id] = 0;
      }
    },
    /* GET sezioni dei prodotti degli animali in AH  */
    async getPetSections() {
      for (let pet of this.pets) {
        let response = await axios.get(
          `${this.$globalVar}/sections?pet=${pet._id}`
        );
        this.sections[pet._id] = response.data;
      }
      this.viewSections = true;
    },
    /* GET prodotti della sezione indicata per animale */
    async getProductsSection() {
      for (let keyValue of Object.entries(this.sections)) {
        let petSections = keyValue[1];
        for (let section of petSections) {
          let response = await axios.get(
            `${this.$globalVar}/products?section=${section._id}`
          );
          this.products[section._id] = response.data;
        }
      }
      this.viewProducts = true;
    },
    /* numero dei prodotti di una sezione */
    maxSectionProduct(petId) {
      return this.products[this.sections[petId][this.showSection[petId]]._id]
        .length;
    },
    /* vedi il prodotto precedente nel carosello */
    goPrev(petId) {
      if (this.showProduct[petId] != 0) {
        this.showProduct[petId]--;
      }
    },
    /* vedi il prodotto successivo nel carosello */
    goNext(petId) {
      let maxProducts = this.maxSectionProduct(petId);
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

<style scoped>
.btn {
  color: #fff;
  border: 1px solid black;
  background-color: #5e00b6;
  font-size: 13px;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #5e00b6;
}

/* description section */
.description__title,
.link {
  color: #5e00b6;
}

/* card section */
.card-container {
  height: 450px;
  width: 80%;
}

.card-title {
  color: #5e00b6;
  font-style: bold;
  font-size: 18px;
}

.card {
  left: 12.5%;
  border: 1.5px solid;
  height: 442px;
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

  .card-body h5 {
    font-size: 14px;
  }

  .card-text {
    height: 20px;
  }
}
</style>
