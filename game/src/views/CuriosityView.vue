<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">la sapevi questa?</p>
        <h1 class="big-text">Curiosità sul mondo animale</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/curiosity/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          Per chi ha voglia di osservarlo, il regno animale è una fonte
          inesauribile di sorprese!<br />Oltre 5 milioni di specie lo popolano
          e, con le loro più disparate forme, gli incredibili colori, le
          sorprendenti strategie comportamentali e tanto altro, lo trasformano
          in un vero e proprio pozzo delle meraviglie.
        </p>
        <p>
          Noi di <b>Animal House</b> veniamo incontro a tutti gli amanti
          curiosi: informazioni, aneddoti, stranezze e tanto altro, per
          assicurarti una piacevole esperienza di navigazione.
        </p>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="keyword__title">In questa pagina</h3>
        <p class="keyword__text">
          Divertiti con i simpatici video sui nostri amici animali in fondo alla
          pagina e impara nuove cose consultando le carte bifronte. Accedi alle
          aree di interesse con un click.
        </p>
      </div>
    </div>

    <!-- keyword section -->
    <div class="grid keyword mb-5">
      <div class="grid" v-for="(keyword, index) in this.keywords" :key="index">
        <div class="col">
          <a
            type="button"
            class="btn keyword__button"
            :href="`${keyword.direct}`"
            :style="{
              'background-color': this.changeColor(`${index}`),
            }"
          >
            <img :src="require(`@/assets/curiosity/${keyword.img}`)" alt=".." />
          </a>
          <h4
            :style="{
              color: this.changeColor(`${index}`),
            }"
          >
            {{ keyword.title }}
          </h4>
        </div>
      </div>
    </div>

    <!-- poster section -->
    <div class="poster">
      <div class="poster__content">
        <p>
          <b>Solo istinto</b>? Macché. Gli animali hanno emozioni, sono
          intelligenti e sanno bene chi sono. E come comportarsi con gli
          altri.<br />
          Animal House non ha mai pensato fosse diversamente: la nostra missione
          continua ad essere quella di voler trasmettere comprensione e amore
          per gli animali al maggior numero di persone possibile.<br />Ci siamo
          molto divertiti a selezionare immagini, storie e aneddoti per te;
          siamo sicuri che ne rimarrai soddisfatto!
        </p>
        <p>
          Per sapere di più sul nostro percorso e
          <b>ciò in cui crediamo</b> accedi all'area
          <router-link :to="{ path: '/chi-siamo' }"
            ><button
              type="button"
              class="btn btn-warning"
              style="border: 1px solid black"
            >
              chi siamo
            </button></router-link
          >
          o scrivici agli indirizzi in descrizione forniti alla sezione
          <router-link :to="{ path: '/contatti' }"
            ><button
              type="button"
              style="border: 1px solid black"
              class="btn btn-warning"
            >
              contatti
            </button></router-link
          >.
        </p>
      </div>
      <div class="poster__img">
        <video autoplay muted loop>
          <source
            src="../assets/curiosity/video__poster.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="description__title big-text">Gira la carta!</h3>
        <p class="description__text">
          Mettiti alla prova indovinando età, alimentazione e habitat di ogni
          specie!<br />
          Scopri se sei un vero esperto sul regno animale giocando al nostro
          <router-link :to="{ path: '/giochi/quiz' }"
            ><button
              type="button"
              class="btn btn-warning"
              style="border: 1px solid black"
            >
              quiz
            </button></router-link
          >
          oppure accedi a quiz dedicati tramite il bottone sul retro della
          carta.
        </p>
        <p class="small card__collaboration-desc">
          — Idea nata in collaborazione con
          <abbr title="World Wide Fund for Nature">WWF</abbr>, l'organizzazione
          internazionale a tutela dell'ambiente e degli animali.<br />Scopri di
          più al sito
          <a
            href="https://www.pandaclub.ch/it/home"
            target="_blank"
            rel="noopener noreferrer"
            class="card__collaboration"
            >Panda Club</a
          >.
        </p>
      </div>
    </div>

    <!-- card section -->
    <div class="container-fluid" id="card" style="margin-bottom: 80px">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div
          v-for="(category, index) in this.categories"
          :key="category"
          class="col"
        >
          <div class="card-container mx-auto mt-5">
            <div class="card card-front">
              <div class="card-body">
                <h5
                  class="card__name"
                  :style="{
                    color: this.changeColor(`${index}`),
                    'border-color': this.changeColor(`${index}`),
                  }"
                >
                  {{ category.name }}
                </h5>
                <p>{{ category.desc }}</p>
              </div>
            </div>
            <div class="card card-back">
              <div
                class="card-body"
                :style="{ 'background-color': this.changeColor(`${index}`) }"
              >
                <h5 class="card__name">Carta d'identità</h5>
                <p><i class="bi bi-balloon"></i> Età: {{ category.età }}</p>
                <p>
                  <i class="bi bi-egg"></i> Alimentazione:
                  {{ category.alimentazione }}
                </p>
                <p>
                  <i class="bi bi-globe-americas"></i> Habitat:
                  {{ category.habitat }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="big-text description__title">Simpatici video di animali!</h3>
        <p class="description__text">
          Ecco alcuni video di animali che ti strapperanno un sorriso!
        </p>
      </div>
    </div>

    <!-- video-gallery section -->
    <div class="video__container" id="gallery">
      <div class="video__list">
        <div class="video" v-for="(video, index) in this.videos" :key="index">
          <video
            :src="require(`@/assets/curiosity/${video.source}`)"
            muted
            controls
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CuriosityView",
  data() {
    return {
      keywords: [
        { direct: "#card", img: "button1.png", title: "conoscenza" },
        { direct: "#card", img: "button2.png", title: "aneddoti" },
        { direct: "#gallery", img: "button3.png", title: "divertimento" },
      ],
      videos: [
        { source: "gallery1.mp4", alt: ".." },
        { source: "gallery2.mp4", alt: ".." },
        { source: "gallery3.mp4", alt: ".." },
      ],
      categories: [],
      colors: [
        "#469374",
        "#19abff",
        "#9341b3",
        "#e3427d",
        "#c4331c",
        "#e68653",
        "#f0c808",
      ],
    };
  },
  methods: {
    changeColor(index) {
      for (let i = 0; i <= 6; i++) {
        if (index % 7 == i) {
          return this.colors[i];
        }
      }
    },
    getCuriosities() {
      axios
        .get("http://localhost:8000/curiosities?qty=16")
        .then((response) => (this.categories = response.data));
    },
  },
  created() {
    this.getCuriosities();
  },
};
</script>

<style scoped>
/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content p {
  color: #ffd60a;
}

/* keyword section */
.keyword {
  text-align: center;
}

.keyword__title {
  color: #ffd60a;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.keyword__button {
  border-radius: 100%;
  border: 0.5px solid #0000008c;
  padding: 15px;
  margin: 10px;
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
  color: #ffd60a;
}

.card__collaboration-desc {
  text-align: right;
  color: #0000008c;
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

.card-container:hover .card-front {
  transform: rotateY(180deg);
}

.card-container:hover .card-back {
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

/* video gallery section */
.video__container {
  position: relative;
  margin-bottom: 50px;
  width: 100%;
}

.video__container .video__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.video__container .video__list .video {
  height: 250px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  overflow: hidden;
}

.video__container .video__list .video video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s linear;
}

.video__container .video__list .video:hover video {
  transform: scale(1.03);
}
</style>
