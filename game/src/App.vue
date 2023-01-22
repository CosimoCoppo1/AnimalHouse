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

/* hero section */
.hero {
  height: 38vh;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  overflow: hidden;
  box-shadow: rgba(133, 126, 126, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
  z-index: 1;
  position: relative;
}

.hero__video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  bottom: 0;
}

/* page-intro section */
.page-intro {
  text-align: center;
  font-size: 22px;
  font-style: italic;
  color: #0000008c;
}

@media (max-width: 768px) {
  .page-intro {
    font-size: 19px;
    text-align: justify;
  }
}

/* description section */
.description__title {
  text-align: center;
  margin-top: 30px;
}

.description__text {
  font-size: 22px;
  text-align: center;
}

@media (max-width: 768px) {
  .description__text {
    font-size: 17px;
    text-align: justify;
  }
}

/* poster section */
.poster {
  display: flex;
  /* height: 100vh; */
  width: 100%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
  /* background: url("../assets/curiosity/bg__poster.png") no-repeat center center; */
}

.poster__img {
  /* width: 65%; */
  height: 100%;
}

.poster__img video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.poster__content {
  /* width: 35%; */
  /* padding: 50px; */
  margin-left: 10px;
  text-align: left;
  font-size: 17px;
}

@media (max-width: 768px) {
  .poster {
    flex-wrap: wrap;
    height: auto;
  }

  .poster__content {
    text-align: justify;
  }

  .poster__img,
  .poster__content {
    width: 100%;
  }
}

/* helpers */
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
