<template>
  <div>
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">la sapevi questa?</p>
        <h1 class="big-text">curiosità sul mondo animale</h1>
        <!-- <a href="" class="button">Discover more</a> -->
      </div>
      <video autoplay muted loop id="video-back">
        <source src="../assets/home/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
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
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <div v-for="(product, index) in this.products" :key="index" class="col">
        <div class="card" style="width: 18rem">
          <img src="../assets/bg-video.jpg" class="card-image-top" />
          <div class="card-body">
            <h5
              class="card-title"
              :style="{
                color: this.changeColor(`${index}`),
              }"
            >
              {{ product.title }}
            </h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}</p>
            <button type="button" class="btn btn-success">Compra!</button>
          </div>
        </div>
      </div>
    </div>
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
    <!-- cani -->
    <div>
      <p>Name: {{ this.pets[0].name }}</p>
      <button
        @click="this.getPetProduct(0, this.pets[0]._id)"
        :style="this.Cani != '' ? 'display: none' : ''"
      >
        Prodotti cane
      </button>
      <span v-if="this.Cani != ''">
        <div v-for="singleProduct in this.Cani" :key="singleProduct">
          <p>{{ singleProduct.title }}</p>
          <p>{{ singleProduct.description }}</p>
          <p>{{ singleProduct.price }}</p>
        </div>
      </span>
    </div>
    <!-- pesci -->
    <div>
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
    </div>
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
      products: [],
      Cani: [],
      Gatti: [],
      Volatili: [],
      Pesci: [],
      Tartarughe: [],
      Roditori: [],
      colors: [
        "#e3427d",
        "#469374",
        "#9341b3",
        "#177bb5",
        "#e68653",
        "#c4331c",
      ],
    };
  },
  methods: {
    getPets() {
      axios
        .get("http://localhost:8000/pets")
        .then((response) => (this.pets = response.data));

      this.load = true;
    },
    getProducts() {
      axios
        .get("http://localhost:8000/products")
        .then((response) => (this.products = response.data));
    },
    getPetProduct(index, id) {
      axios.get(`http://localhost:8000/products?pet=${id}`).then((response) => {
        if (index == 0) {
          this.Cani = response.data;
        } else if (index == 1) {
          this.Gatti = response.data;
        } else if (index == 2) {
          this.Volatili = response.data;
        } else if (index == 3) {
          this.Pesci = response.data;
        } else if (index == 4) {
          this.Tartarughe = response.data;
        } else if (index == 5) {
          this.Roditori = response.data;
        }
      });
    },
    changeColor(index) {
      for (let i = 0; i <= 5; i++) {
        if (index % 5 == i) {
          return this.colors[i];
        }
      }
    },
  },
  created: function () {
    this.getPets();
    this.getProducts();
  },
};
</script>

<style>
/* hero */
.hero {
  height: 38vh;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  overflow: hidden;
}

.hero:after {
  content: " ";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.4;
}

.hero__content {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 30px;
  z-index: 1;
  position: relative;
}

.hero__content h1,
.hero__content p {
  color: yellow;
}

.hero--small {
  height: 450px;
  text-align: center;
}

#video-back {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  bottom: 0;
}

.card-title {
  text-align: center;
  margin: 15px auto;
  font-weight: 900;
  font-size: 25px;
}
/*
.card-container {
  width: 18rem;
  perspective: 200rem;
  position: relative;
  height: 389px;
}

.card {
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
}

.card-body button {
  position: fixed;
  right: 15px;
  bottom: 15px;
  color: #fff;
  font-size: 14px;
  border: none;
  background-color: #2c3e50;
}
*/
.card-body {
  position: relative;
}

.card-body button {
  color: #fff;
  font-size: 14px;
  border: none;
  background-color: #2c3e50;
}
</style>

<!--
data() {
    return {
      pets: [],
      products: [],
      caniProducts: [],
      gattiProducts: [],
      volatiliProducts: [],
      pesciProducts: [],
      tartarugheProducts: [],
      roditoriProducts: [],
    };
  },
  created() {
    axios.get("http://localhost:8000/pets").then((response) => {
      this.pets = response.data[0];
    });

    this.getProductByName();
  },
  methods: {
    getProductByName() {
      let cats = [
        "63c27570b282c008201f503b",
        "Gatti",
        "Volatili",
        "Pesci",
        "Tartarughe",
        "Roditori",
      ];
      console.log("THIS WILL ALWAYS BE AN EMPTY ARRAY", this.pets);
      console.log(cats);

      for (let cat of cats) {
        if (cat == "63c27570b282c008201f503b") {
          axios
            .get(`http://localhost:8000/products?pet=${cat}`)
            .then((res) => (this.caniProducts = res.data));
          console.log(0, this.caniProducts);
        }
      }
    },
  },
  watch: {
    pets(newVal) {
      console.log("THIS WILL HAVE DATA WHEN operaciones IS POPULATED", newVal);
      this.pets = newVal;
    },
  },
-->
