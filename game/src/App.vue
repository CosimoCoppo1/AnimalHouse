<template>
  <div>
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "../src/components/NavbarComponent.vue";

export default {
  components: { NavbarComponent },
};
</script>

<style>
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

.big-text {
  font-size: 70px;
  font-weight: 900;
}

.med-text {
  font-size: 40px;
}

.normal-text {
  font-size: 20px;
}

.small-text {
  font-size: 14px;
}

.intro-text {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .big-text {
    font-size: 40px;
  }
}

/* grid system */
.grid {
  display: flex;
  max-width: 1350px;
  padding: 0 30px;
  margin: 0 auto;
  /* border: 1px solid red; */
}

.grid .col {
  width: 100%;
  /* border: 1px solid red; */
}

@media (max-width: 768px) {
  .grid {
    flex-wrap: wrap;
  }
}

/* helpers */
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
