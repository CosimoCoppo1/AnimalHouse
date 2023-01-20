<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">a misura di animale</p>
        <h1 class="big-text">Servizi di Animal House</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/services/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          Animal House è un progetto che desidera avere un <b>impatto</b> sulle
          persone che condividono la propria vita con gli animali.<br />È
          nell'atto del prendersi cura che si collocano i nostri servizi e i
          nostri professionisti del Pet car: siamo tra i primi nel settore del
          <b>Pet care specialism</b>.
        </p>
      </div>
    </div>

    <!-- image gallery section -->
    <div class="container-fluid image-gallery">
      <p class="description__text">
        Per ogni dubbio contattaci agli indirizzi in descrizione forniti alla
        sezione
        <router-link :to="{ path: '/contatti' }">
          <button class="btn btn-primary contatti" type="button">
            contatti
          </button>
        </router-link>
      </p>
      <div class="row">
        <div class="col-md-4" align="right">
          <div class="image__container">
            <img
              src="../assets/services/gallery1.png"
              alt="..."
              class="image"
            />
            <a type="button" class="btn" href="#sedi">le sedi</a>
          </div>
        </div>
        <div class="col-md-4" align="center">
          <div class="image__container">
            <img
              src="../assets/services/gallery2.png"
              alt="..."
              class="image"
            />
            <a type="button" class="btn" href="#servizi">i servizi offerti</a>
          </div>
        </div>
        <div class="col-md-4" align="left">
          <div class="image__container">
            <img
              src="../assets/services/gallery3.jpg"
              alt="..."
              class="image"
            />
            <a type="button" class="btn" href="#staff">lo staff</a>
          </div>
        </div>
      </div>
    </div>

    <!-- workplaces section -->
    <div class="grid" id="sedi">
      <div class="col">
        <h3 class="description__title big-text">Le sedi</h3>
        <p class="description__text">
          Animal House nasce per offrire un servizio moderno ed efficiente per
          la cura e la prevenzione di tutte le patologie degli animali da
          compagnia. Offriamo la nostra esperienza professionale maturata negli
          anni con continuo aggiornamento a disposizione per il
          <b>benessere</b> e la <b>cura</b> dei vostri animali.<br />Ci
          avvaliamo inoltre della collaborazione di specialisti nelle varie
          discipline.
        </p>
      </div>
    </div>

    <!-- locations section -->
    <div class="container">
      <div
        class="location__container"
        v-for="(location, index) in this.locations"
        :key="index"
      >
        <div class="location__city">{{ location.city }}</div>
        <div class="location__address">{{ location.address }}</div>
      </div>
    </div>

    <!-- services section -->
    <div class="grid" id="servizi">
      <div class="col">
        <h3 class="description__title big-text">I nostri servizi</h3>
        <p class="description__text">
          La clinica veterinaria Pet Care è divisa in due stabili. Il primo
          dedicato esclusivamente alla TAC e il secondo costittuisce il cuore
          pulsante della clinica e dispone di due sale visita, una sala eco, una
          sala raggi, una prechirurgia/sala endoscopia, una sala chirugica,
          laboratorio analisi e la degenza.
        </p>
      </div>
    </div>

    <!-- staf section -->
    <div class="grid" id="staff">
      <div class="col">
        <h3 class="description__title big-text">Lo staff</h3>
        <p class="description__text">ciao</p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ServicesView",
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    getLocations() {
      axios
        .get("http://localhost:8000/locations")
        .then((response) => (this.locations = response.data));
    },
  },
  created: function () {
    this.getLocations();
  },
};
</script>

<style>
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

.hero__content h1,
.hero__content p {
  color: #90e0ef;
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

/* image gallery section */
.image-gallery {
  background: url("../assets/curiosity/bg__poster.png") no-repeat center center;
}

.contatti {
  background-color: #90e0ef;
  border: 1px solid black;
  color: #2c3e50;
}

.image__container {
  position: relative;
}

.image {
  display: block;
  width: 70%;
  height: 70%;
  margin-bottom: 20px;
}

.image__container .btn {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #0000008c;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

.image__container .btn:hover {
  background-color: #90e0ef;
}

/* workplaces section */
.description__title {
  color: #90e0ef;
  text-align: center;
  margin-top: 80px;
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

/* locations section */
.location__container {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  margin-bottom: 20px;
}

.location__city {
  font-weight: bold;
  font-size: 22px;
  position: absolute;
  right: 0;
}

.location__address {
  font-size: 22px;
}

@media (max-width: 768px) {
  .location__city {
    position: static;
    font-size: 17px;
    text-align: center;
  }

  .location__address {
    font-size: 17px;
    text-align: center;
  }
}
</style>
