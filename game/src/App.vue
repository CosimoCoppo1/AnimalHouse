<template>
  <div>
    <HomeView />
    <nav>
      <router-link to="/feed">Feed</router-link> |
      <router-link to="/rockpaperscissor">R, P, S</router-link> |
      <router-link to="/scramble">Scramble</router-link> |
      <router-link to="/peek">Peek</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/puzzle">Puzzle</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HomeView from "../src/views/HomeView.vue";

export default {
  components: { HomeView },
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

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #000;
  padding-bottom: 30px;
}

p {
  line-height: 28px;
  color: #666;
  font-weight: 300;
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

.button {
  padding: 18px 20px;
  background: #316bff;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
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
}

.grid .col {
  width: 100%;
}

@media (max-width: 768px) {
  .grid {
    flex-wrap: wrap;
  }
}

/* helpers */
.mt-1 {
  margin-top: 50px;
}

.mt-2 {
  margin-top: 100px;
}

.mt-3 {
  margin-top: 150px;
}

.tw {
  color: rgb(13, 47, 199);
}

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
