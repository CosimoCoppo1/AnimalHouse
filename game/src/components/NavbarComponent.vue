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
            <router-link :to="{ path: '/' }" class="link"> Home </router-link>
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

<style>
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
/* #cover {
  background: url("../assets/logo.png") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
.titolo-principale {
  font-size: 70px;
  font-weight: bold;
}
.sottotitolo {
  font-size: 35px;
  max-width: 500px;
  margin: 0 auto;
}
.button {
  background-color: blue;
  color: rgb(24, 20, 20);
  padding: 10px 30px;
  display: inline-block;
  border-radius: 30px;
  margin: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}
.data {
  color: blue;
  font-weight: bold;
  font-size: 16px;
}
.arrow {
  margin-top: 20px;
  font-size: 30px;
}
.parallax {
  padding-top: 200px;
  padding-bottom: 20px;
  text-align: center;
  color: #fff;
}

nav {
  min-height: 70px;
}
.img-logo {
  width: auto;
  height: 70px;
}
@media (max-width: 1024px) {
  nav {
    background-color: blue;
  }
  .parallax {
    padding: 100px 50px 50px 50px;
  }
  .titolo-principale {
    font-size: 40px;
  }
  .module {
    margin-bottom: 60px;
  }
}

focus 
.spacer {
  height: 70px;
}
.titolo-secondario {
  font-size: 26px;
  color: #000;
  font-weight: bold;
}
.trattino {
  width: 30px;
  height: 10px;
  background-color: blue;
  margin-bottom: 20px;
  margin-top: 10px;
} */
</style>
