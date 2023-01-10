<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt="" style="width: 30%" />
      </div>
      <ul class="menu" :class="{ 'menu--open': this.openMenu }">
        <li><a href="">Home</a></li>
        <li><a href="">Single</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div class="cta">
        <a href="" class="button">Contatti</a>
      </div>
      <div class="hamburger" @click="open()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">Intro text</p>
        <h1 class="big-text">Titolo della mia pagina Web</h1>
        <a href="" class="button">Discover more</a>
      </div>
      <video autoplay muted loop id="video-back">
        <source src="../assets/video-back.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="poster mt-3">
      <div class="poster__img">
        <img src="../assets/bg-video.jpg" alt="" />
      </div>
      <div class="poster__content">
        <h3 class="big-text">Titolo della mia poster</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
          aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint obcaecat cupiditat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </p>
        <a href="" class="button">Call to action</a>
      </div>
    </div>

    <div class="bg-cover mt-3">
      <div class="bg-cover__title">
        <h3 class="big-text tw">Titolo del mio blocco cover</h3>
      </div>
      <div class="bg-cover__text">
        <h4 class="normal-text tw">Titolo del mio paragrafo</h4>
        <p class="tw">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
          aliquid ex ea commodi consequatur.
        </p>

        <h4 class="normal-text tw">Titolo del mio paragrafo</h4>
        <p class="tw">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
          aliquid ex ea commodi consequatur.
        </p>

        <h4 class="normal-text tw">Titolo del mio paragrafo</h4>
        <p class="tw">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
          aliquid ex ea commodi consequatur.
        </p>
      </div>
    </div>

    <div class="grid mt-3">
      <div class="col">
        <div class="big-text">
          <h3 class="big-text">
            Lorem ispums <br />
            sia maet
          </h3>
        </div>
      </div>
      <div class="col">
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisci elit
        </p>
      </div>
    </div>

    <div class="panel-blue mt-3">
      <div class="grid panel-blue">
        <div class="col panel-blue__dots">
          <div class="dot">Text</div>
          <div class="dot">Text</div>
          <div class="dot">Text</div>
          <div class="dot">Text</div>
        </div>
        <div class="col panel-blue__text">
          <div class="grid">
            <div class="col">
              <h3 class="big-text tw">Lorem ispums</h3>
            </div>
            <div class="col">
              <p class="tw mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisci elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="poster mt-3">
      <div class="poster__content">
        <h3 class="big-text">Titolo della mia poster</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
          aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint obcaecat cupiditat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </p>
        <a href="" class="button">Call to action</a>
      </div>
      <div class="poster__img">
        <img src="../assets/bg-video.jpg" alt="" />
      </div>
    </div>

    <div class="content">
      <h3>Lorem</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
      </p>
    </div>

    <footer class="footer mt-1">
      <div class="grid">
        <div class="col">
          <h4 class="normal-text tw">Lorem ipsums</h4>
          <p>Lorem ipsums Lorem ipsums</p>
        </div>
        <div class="col">
          <h4 class="normal-text tw">Lorem ipsums</h4>
          <p>Lorem ipsums Lorem ipsums</p>
        </div>
        <div class="col">
          <h4 class="normal-text tw">Lorem ipsums</h4>
          <p>Lorem ipsums Lorem ipsums</p>
        </div>
        <div class="col">
          <h4 class="normal-text tw">Lorem ipsums</h4>
          <p>Lorem ipsums Lorem ipsums</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      openMenu: true,
    };
  },
  methods: {
    open() {
      this.openMenu = !this.openMenu;
      console.log(this.openMenu);
    },
  },
};
</script>

<style>
/* header */
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  display: flex;
  max-width: 1350px;
  z-index: 10;
}

.logo {
  z-index: 1;
}

.menu {
  width: 100%;
  z-index: 0;
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.menu li {
  display: inline-block;
}

.menu li a {
  color: green;
  padding: 15px;
  display: block;
}

.hamburger {
  display: none;
}

.menu--open {
  right: 0;
}

@media (max-width: 768px) {
  .cta {
    display: none;
  }

  .menu {
    position: absolute;
    top: 0;
    right: -100%;
    background: black;
    height: 100vh;
    padding-top: 80px;
  }

  .menu li {
    display: block;
  }

  .menu li a {
    padding: 15px 30px;
    font-size: 20px;
  }

  .hamburger {
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 40px;
    right: 30px;
  }

  .hamburger span {
    background: #000;
    height: 3px;
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
}

/* hero */
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background: url("../assets/bg-video.jpg") no-repeat center center;
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

/* poster */
.poster {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
}

.poster__img {
  width: 65%;
  height: 100%;
}

.poster__img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.poster__content {
  width: 35%;
  padding: 50px;
}

@media (max-width: 768px) {
  .poster {
    flex-wrap: wrap;
    height: auto;
  }

  .poster__img,
  .poster__content {
    width: 100%;
  }
}

/* bg cover */
.bg-cover {
  display: flex;
  padding: 100px 0;
  background: url("../assets/bg-video.jpg") no-repeat center center;
}

.bg-cover__text {
  width: 50%;
  padding: 30px;
}

.bg-cover__title {
  width: 50%;
  padding: 50px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .bg-cover {
    flex-wrap: wrap;
    height: auto;
  }

  .bg-cover__text,
  .bg-cover__title {
    width: 100%;
  }
}

/* panel */
.panel-blue {
  background: #4bb1e9;
  padding: 100px 30px;
}

.dot {
  height: 250px;
  width: 250px;
  background: #6adf91;
  border-radius: 100%;
  line-height: 250px;
  text-align: center;
  display: inline-block;
  margin-right: 40px;
  margin-bottom: 40px;
}

.panel-blue__text {
  display: flex;
  align-items: center;
}

/* content */
.content {
  max-width: 900px;
  margin: 40px auto;
}

/* footer */
.footer {
  background: #010e30;
  padding: 150px 0;
}
</style>

<!--
  <p>Feed game: da finire, unico file "FeedView.vue"</p>
  <p>RockPaperScissors: da finire, unico file "RPSView.vue</p>
  <p>scramble: da finire, unico fil "ScrambleView"</p>
  <p>peek: da finire, componente "CardCOmponent" e file "PeekView"</p>
  <p>
    puzzlegame blocca il gioco, perchè??, componenti: startcomponent,
    gamecomponent, playagaincomponent
  </p>
  <p>quizview: da finire, unico file QuizView</p>
-->
