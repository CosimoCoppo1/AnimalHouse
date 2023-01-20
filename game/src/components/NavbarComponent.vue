<template>
  <nav class="navbar fixed-top navbar-expand-md" id="page-top">
    <div class="container-fluid">
      <a class="navbar-brand" @click="this.scrollToTop()">
        <!-- <img src="../assets/logo.png" alt="" style="width: 20%" /> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="navbar-toggler-icon bi bi-three-dots-vertical"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ path: '/' }"
            >
              Home</router-link
            >
          </li>
          <li class="nav-item" v-for="(link, index) in this.links" :key="index">
            <router-link class="nav-link" :to="{ name: `${link}` }">
              {{ link }}</router-link
            >
          </li>
        </ul>
      </div>
      <!-- <a href="/accedi">
        <img src="../assets/login.png" alt="" />
      </a> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      links: [
        "Servizi",
        "Negozio",
        "Giochi",
        "Dati personali",
        "Chi siamo",
        "Contatti",
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
/* navbar */
.navbar {
  transition: background-color 250ms ease-in;
  background-color: #deefb7;
  cursor: pointer;
}

.navbar-toggler-icon {
  background-image: url("https://miro.medium.com/max/512/1*Js0Y20MwjcTnVAe7KjDXNg.png");
}

.navbar-toggler {
  border: none;
}

.navbar-brand {
  display: flex;
}
</style>
