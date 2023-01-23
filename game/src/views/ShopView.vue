<template>
  <div>
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
    <div class="container">
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
    <!-- <div>
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
    </div> -->
    <!-- pesci -->
    <!-- <div>
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
    </div> -->
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
      products: [
        {
          title: "Cuccia ciambella pelosa",
          price: "31.90",
          description:
            "Ciambella pelosa morbida rosa perfetta per il riposo quotidiano del tuo cane.",
          image: "accessoricane1.png",
          alt: "Cuccia a ciambella pelosa",
        },
        {
          title: "Peluche scoiattolo striato",
          price: "4.20",
          description:
            "Il peluce con squittio è l'accessorio perfetto per divertirti a lungo con Fido.",
          image: "accessoricane2.png",
          alt: "Peluche scoiattolo",
        },
        {
          title: "Guinzaglio per addestramento rosso",
          price: "12.99",
          description:
            "Guinzaglio educativo regolabile su 3 lunghezze per addestramento.",
          image: "accessoricane3.png",
          alt: "Guinzaglio per addestramento rosso",
        },
        {
          title: "Ciotola doppia in acciaio",
          price: "14.89",
          description:
            "Ciotola doppia dal fondo antiscivolo per evitare che il cane sbrodoli sul pavimento di casa.",
          image: "accessoricane4.png",
          alt: "Ciotola doppia in acciaio",
        },
      ],
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
  },
};
</script>

<style>
/* card section */
.card {
  width: 20rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 20px;
  background-color: #bdd5ea;
}
</style>
