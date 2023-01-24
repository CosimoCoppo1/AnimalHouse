<template>
  <div>
    <!-- <div v-for="index in 6" :key="index">
       <div v-for="`pet in this.productsPet[${index}]`" :key="pet">
        {{ pet.title }}, {{ pet.description }}
       </div>
       <h1>ciao</h1>
       <div v-for="pet in this.pet1" :key="pet">
         {{ pet.title }}, {{ pet.description }}
       </div>
     </div> -->
    <h1>ciao</h1>
  </div>
</template>
<!-- 
<script>
import axios from "axios";

export default {
  name: "SignupView",
  data() {
    return {
      pets: [],
      productsPet: [{}, {}, {}, {}, {}, {}],
      pet0: [],
      pet1: [],
      pet2: [],
      pet3: [],
      pet4: [],
      pet5: [],
    };
  },
  methods: {
    getPets() {
      axios.get("http://localhost:8000/pets").then((response) => {
        this.pets = response.data;
        for (let pet of this.pets) {
          this.getProductPets(pet._id, pet.name);
        }
      });
    },
    getProductPets(petId, petName) {
      axios
        .get(`http://localhost:8000/products?pet=${petId}`)
        .then((response) => {
          if (petName == "Cani") {
            this.productsPet[0] = response.data;
          } else if (petName == "Gatti") {
            this.productsPet[1] = response.data;
          } else if (petName == "Volatili") {
            this.productsPet[2] = response.data;
          } else if (petName == "Pesci") {
            this.productsPet[3] = response.data;
          } else if (petName == "Tartarughe") {
            this.productsPet[4] = response.data;
          } else {
            this.productsPet[5] = response.data;
          }
        });
    },
  },
  created() {
    this.getPets();
  },
};
</script>

<style></style> -->
