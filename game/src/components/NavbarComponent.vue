<template>
  <div id="page-top">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light">
      <a class="navbar-brand" href="#page-top">
        <span class="logo">Animal House</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#barraNavigazione"
        aria-controls="barraNavigazione"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="border: none"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="barraNavigazione" is-nav>
        <ul class="navbar-nav me-auto mb-2 mb-lg-1">
          <li class="nav-item">
            <router-link :to="{ path: '/' }" class="link">
              <span lang="en" xml:lang="en">Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/servizi' }" class="link">
              Servizi
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/negozio' }" class="link">
              Negozio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/giochi' }" class="link">
              Giochi
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/informazioni-curiose' }" class="link">
              Informazioni curiose
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/dati-personali' }" class="link">
              Dati personali
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/chi-siamo' }" class="link">
              Chi siamo
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/contatti' }" class="link">
              Contatti
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.navbar {
  background-color: #dfffff;
}

.logo {
  color: #03045e;
  margin-left: 10px;
}

.link {
  text-decoration: none;
  margin-left: 10px;
}

.navbar-toggler {
  margin-right: 10px;
}

.router-link-active {
  color: #03045e !important;
}
</style>
