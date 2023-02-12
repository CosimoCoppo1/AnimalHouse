<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">la sapevi questa?</h1>
        <h2 class="big-text">Curiosità sul mondo animale</h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/curiosity/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          Per chi ha voglia di osservarlo, il regno animale è una fonte
          <em>inesauribile</em> di sorprese!<br />Oltre 5 milioni di specie lo
          popolano e, con le loro più disparate forme, gli incredibili colori,
          le sorprendenti strategie comportamentali e tanto altro, lo
          trasformano in un vero e proprio pozzo delle meraviglie.
        </p>
        <p>
          Noi di <b lang="en" xml:lang="en">Animal House</b>
          <em>veniamo incontro</em> a tutti gli amanti curiosi: informazioni,
          aneddoti, stranezze e tanto altro, per assicurarti una piacevole
          esperienza di navigazione.
        </p>
      </div>
    </section>

    <!-- description section -->
    <section class="grid paragraph">
      <div class="col">
        <h3 class="keyword__title">In questa pagina</h3>
        <p class="keyword__text">
          Impara nuove cose consultando le carte bifronte e accedi alle aree di
          interesse con un <span lang="en" xml:lang="en">click</span>.
        </p>
      </div>
    </section>

    <!-- keyword section -->
    <section class="grid keyword mb-5">
      <div class="grid" v-for="(keyword, index) in this.keywords" :key="index">
        <menu class="col">
          <li>
            <div
              class="keyword__button"
              :style="{
                'background-color': this.changeColor(`${index}`),
              }"
            >
              <h4>{{ keyword.title }}</h4>
            </div>
          </li>
        </menu>
      </div>
    </section>

    <!-- poster section -->
    <section class="poster">
      <section class="poster__content">
        <p>
          <b>Solo istinto</b>? Macché. Gli animali hanno emozioni, sono
          intelligenti e sanno bene chi sono. E come comportarsi con gli
          altri.<br />
          <span lang="en" xml:lang="en">Animal House</span> non ha mai pensato
          fosse diversamente: la nostra missione continua ad essere quella di
          <em>voler trasmettere</em> comprensione e amore per gli animali al
          maggior numero di persone possibile.<br />Ci siamo molto divertiti a
          selezionare immagini, storie e aneddoti <em>per te</em>; siamo sicuri
          che ne rimarrai soddisfatto!
        </p>
        <p>
          Per sapere di più sul nostro percorso e
          <b>ciò in cui crediamo</b> accedi all'area
          <router-link
            :to="{ path: '/chi-siamo' }"
            role="button"
            class="btn btn-success"
          >
            chi siamo
          </router-link>
          o scrivici agli indirizzi in descrizione forniti alla sezione
          <router-link
            :to="{ path: '/contatti' }"
            role="button"
            class="btn btn-success"
          >
            contatti </router-link
          >.
        </p>
      </section>
      <div class="poster__img">
        <video autoplay muted loop alt="">
          <source
            src="../assets/curiosity/video__poster.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>

    <!-- description section -->
    <main>
      <section class="grid paragraph">
        <div class="col">
          <h3 class="description__title big-text">Gira la carta!</h3>
          <p class="description__text">
            <em>Mettiti alla prova</em> indovinando età, alimentazione e habitat
            di ogni specie!<br />
            Scopri se sei un vero esperto sul regno animale giocando al nostro
            <router-link
              :to="{ path: '/giochi/quiz' }"
              role="button"
              class="btn btn-success"
            >
              quiz </router-link
            >.
          </p>
          <aside class="small card__collaboration-desc">
            — Idea nata in collaborazione con
            <abbr title="World Wide Fund for Nature">WWF</abbr>,
            l'organizzazione internazionale a tutela dell'ambiente e degli
            animali.<br />Scopri di più al sito
            <a
              href="https://www.pandaclub.ch/it/home"
              target="_blank"
              rel="noopener noreferrer"
              class="card__collaboration"
              >Panda Club</a
            >.
          </aside>
        </div>
      </section>

      <!-- card section -->
      <article class="container-fluid" style="margin-bottom: 80px">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <div
            v-for="(category, index) in this.categories"
            :key="category"
            class="col"
          >
            <button
              class="button-card"
              :id="`${index}`"
              :class="this.calcCard(`${index}`) ? '' : 'change-front'"
              @click="this.changeCard(`${index}`)"
            >
              <div class="card-container mx-auto mt-5">
                <div class="card card-front">
                  <section class="card-body">
                    <h4
                      class="card__name"
                      :style="{
                        color: this.changeColor(`${index}`),
                        'border-color': this.changeColor(`${index}`),
                      }"
                    >
                      {{ category.name }}
                    </h4>
                    <p>{{ category.desc }}</p>
                  </section>
                </div>
                <div class="card card-back">
                  <div
                    class="card-body"
                    :style="{
                      'background-color': this.changeColor(`${index}`),
                    }"
                  >
                    <h5 class="card__name">Carta d'identità</h5>
                    <section>
                      <p>
                        <i class="bi bi-balloon"></i>
                        Età :
                        {{ category.età }}
                      </p>

                      <p>
                        <i class="bi bi-egg"></i>

                        Alimentazione :
                        {{ category.alimentazione }}
                      </p>
                      <p>
                        <i class="bi bi-globe-americas"></i>

                        <span lang="en" xml:lang="en">Habitat</span> :
                        {{ category.habitat }}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CuriosityView",
  data() {
    return {
      myVar: this.$globalVar,
      keywords: [
        { img: "button1.png", title: "conoscenza" },
        { img: "button2.png", title: "aneddoti" },
        { img: "button3.png", title: "divertimento" },
      ],
      categories: [],
      click: {},
      colors: ["#2E604C", "#005180", "#9341b3", "#a52252", "#c4331c"],
    };
  },
  methods: {
    /* imposta il counter dei click su ogni carta */
    defineCount() {
      for (let i = 0; i < 16; i++) {
        this.click[i] = 0;
      }
    },
    /* cambia colore delle icone della card section */
    changeColor(index) {
      for (let i = 0; i <= 4; i++) {
        if (index % 5 == i) {
          return this.colors[i];
        }
      }
    },
    /* cambia il lato di visualizzazione delle card sulle curiosità */
    changeCard(index) {
      this.click[index]++;
    },
    /* definisce il lato di visualizzazione della card */
    calcCard(index) {
      return this.click[index] % 2 == 0;
    },
    /* GET curiosità sugli animali */
    getCuriosities() {
      axios
        .get(`${this.$globalVar}/curiosities?qty=16`)
        .then((response) => (this.categories = response.data));
    },
  },
  created() {
    this.getCuriosities();
    this.defineCount();
    this.calcCard();
  },
};
</script>

<style scoped>
/* helpers */
.btn {
  background-color: #1f6600;
  color: #fff;
  border: 1px solid black;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #1f6600;
}

/* keyword section */
.keyword {
  text-align: center;
}

.keyword menu {
  list-style-type: none;
}

.keyword__title {
  color: #1f6600;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.keyword__button {
  border-radius: 100%;
  border: 0.5px solid #0000008c;
  padding: 30px;
  margin: 10px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.keyword__button:hover {
  transform: scale(1.05);
}

.keyword__button img {
  max-width: 100%;
}

.keyword h4 {
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
}

.keyword__text {
  font-size: 22px;
  text-align: center;
}

@media (max-width: 768px) {
  .keyword__text {
    font-size: 17px;
    text-align: justify;
  }
}

/* poster section */
.poster {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
  background: url("../assets/curiosity/bg__poster.png") no-repeat center center;
}

.poster__img {
  width: 65%;
  height: 100%;
}

.poster__img video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.poster__content {
  width: 35%;
  padding: 50px;
  text-align: left;
  font-size: 17px;
}

.page-link {
  color: #177bb5;
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 1000px) {
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

/* card section */
.description__title {
  color: #1f6600;
}

.card__collaboration-desc {
  text-align: right;
  color: #0000008c;
}

.button-card {
  border: none;
  background-color: #fff;
}

.card__collaboration {
  text-decoration: none;
  color: #177bb5;
}

.card-container {
  width: 18rem;
  perspective: 200rem;
  position: relative;
  height: 389px;
}

.change-front .card-front {
  transform: rotateY(180deg);
}

.change-front .card-back {
  transform: rotateY(0deg);
}

.card {
  transition: all 0.9s;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
}

.card-back {
  transform: rotateY(180deg);
  color: #fff;
}

.card-back .card-body {
  position: relative;
}

.card-body {
  border-radius: 20px;
}

.card-back a {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -15% 0 0 -23%;
}

.card__name {
  text-align: center;
  margin: 15px auto;
  font-weight: 900;
  font-size: 25px;
}

@media (max-width: 768px) {
  .card__intro {
    font-size: 17px;
    text-align: justify;
  }
}
</style>
