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

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <p class="description__text">
          Per ogni dubbio contattaci agli indirizzi in descrizione forniti alla
          sezione
          <router-link :to="{ path: '/contatti' }">
            <button class="btn btn-primary contatti" type="button">
              contatti
            </button> </router-link
          >.
        </p>
      </div>
    </div>

    <!-- image gallery section -->
    <div class="container-fluid image-gallery">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(client, index) in this.clients"
          :key="index"
          :align="`${client.position}`"
        >
          <div class="image__container">
            <img
              :src="require(`@/assets/services/${client.img}`)"
              class="image"
              alt=".."
            />
            <a type="button" class="btn" :href="`${client.link}`">{{
              client.direct
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
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
    <div class="container mt-4">
      <div
        class="location__container"
        v-for="(location, index) in this.locations"
        :key="index"
      >
        <div class="location__city">{{ location.city }}</div>
        <div class="location__address">{{ location.address }}</div>
      </div>
    </div>

    <!-- alert section -->
    <div class="container alert alert-info" role="alert">
      Per conoscere i servizi specifici per sede passa alla sezione contatti.<br />
      Prenota subito un appuntamento passando all'area
      <a href="#">VIP</a> di Animal House.
    </div>

    <!-- description section -->
    <div class="grid" id="servizi">
      <div class="col">
        <h3 class="description__title big-text">I nostri servizi</h3>
        <p class="description__text">
          <b>Semplicità</b> e <b>intuitività</b> sono le caratteristiche
          principali che rendono Animal House un sistema che offre una serie di
          servizi per animali domestici finalizzati a migliorare il benessere
          della vita del tuo amico a quattro zampe, e non solo, e a rafforzare
          il rapporto con il proprietario.<br />
          Animal House è infatti il primo sito con servizio di
          <b>booking</b> specificamente progettata per il mondo pet, a cui si
          possono rivolgere sia chi ha dedicato il proprio lavoro agli animali,
          sia per chi ne fa richiesta.<br />Basterà
          <a href="#"><b>iscriverti</b></a> gratuitamente come membro della
          comunità, per registrare il proprio pet in un network con innumerevoli
          servizi.
        </p>
      </div>
    </div>
    <!-- <div v-for="(service, index) in this.services" :key="index">
      <p>{{ service.name }}</p>
      <p>{{ service.description }}</p>
    </div> -->
    <div
      class="poster container"
      v-for="(service, index) in this.services"
      :key="index"
    >
      <div class="poster__content">
        <h3 class="description__title">{{ service.name }}</h3>
        <p>{{ this.serviceInformation[index].action }}</p>
        <p>{{ service.description }}</p>
        <a href="" class="button">Call to action</a>
      </div>
      <div class="poster__img">
        <img
          :src="
            require(`@/assets/services/${this.serviceInformation[index].img}`)
          "
          alt=".."
        />
        <!-- <img :src="service.image" alt="..." /> -->
      </div>
    </div>

    <!-- description section -->
    <div class="grid mt-4">
      <div class="col">
        <h3 class="description__title">
          Per conoscere i servizi più in dettaglio accedi all'area
          <a href="#">VIP</a>.
        </h3>
      </div>
    </div>

    <!-- description section -->
    <div class="grid mt-4" id="staff">
      <div class="col">
        <h3 class="description__title big-text">Lo staff</h3>
        <p class="description__text">
          <b>Professionisti Pet care certificati</b>.<br />Altro grande
          vantaggio è quello di avere la sicurezza che tutti coloro che offrono
          un servizio per animali all’interno di Animal House sono
          professionisti del settore.<br />Ciò è possibile grazie ad un
          controllo <b>attento</b> ed accurato.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ServicesView",
  data() {
    return {
      clients: [
        {
          position: "right",
          img: "gallery1.png",
          link: "#sedi",
          direct: "le sedi",
        },
        {
          position: "center",
          img: "gallery2.png",
          link: "#servizi",
          direct: "i servizi offerti",
        },
        {
          position: "left",
          img: "gallery3.jpg",
          link: "#staff",
          direct: "lo staff",
        },
      ],
      serviceInformation: [
        {
          img: "serv0.jpg",
          action:
            "I servizi di toilettatura consistono in una lunga serie di processi fondamentali per il benessere dei nostri amici animali; nello specifico questi sono i servizi che puoi trovare su Animal House:",
        },
        {
          img: "serv1.jpg",
          action:
            "Offrire il massimo del benessere al tuo cane è una priorità, specialmente nelle situazioni in cui non puoi essere presente. Il Pet Sitter, oltre ad essere un vero amante degli animali, è una persona estremamente qualificata e professionale capace di entrare subito in sintonia con il tuo cane e pronta a risolvere qualsiasi eventuale problematica comportamentale.",
        },
        {
          img: "serv2.jpg",
          action:
            "Affidarsi ad uno Studio Veterinario e ad un medico competente e soprattutto bravo è un fattore determinante per il benessere del tuo animale, offrendogli una qualità di vita migliore. Cosa comprendono i servizi per il tuo cane:",
        },
        {
          img: "serv3.jpg",
          action:
            "La visita veterinaria è di solito un evento stressante per il gatto? Dopo la prima visita da Animal House siamo certi che il tuo gatto non accuserà più queste difficoltà. Vieni nei nostri centri per usufruire di:",
        },
        {
          img: "serv4.jpg",
          action:
            "Non solo cani e gatti, ma anche i nostri amici acquatici hanno diritto ad una cura e attenzione altrettanto di alto livello. Ecco i servizi di Animal House per veterinaria pesci:",
        },
      ],
      locations: [],
      pets: [],
      services: [],
      colors: [
        "#469374",
        "#9341b3",
        "#e3427d",
        "#c4331c",
        "#e68653",
        "#f0c808",
      ],
    };
  },
  methods: {
    getLocations() {
      axios
        .get("http://localhost:8000/locations")
        .then((response) => (this.locations = response.data));
    },
    getPets() {
      axios
        .get("http://localhost:8000/pets")
        .then((response) => (this.pets = response.data));
    },
    getServices() {
      axios
        .get("http://localhost:8000/services")
        .then((response) => (this.services = response.data));
    },
    changeColor(index) {
      for (let i = 0; i <= 5; i++) {
        if (index % 6 == i) {
          return this.colors[i];
        }
      }
    },
  },
  created: function () {
    this.getLocations();
    this.getServices();
    this.getPets();
  },
};
</script>

<style>
/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content p {
  color: #90e0ef;
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

.image__container .btn:hover {
  background-color: #90e0ef;
}

/* description section */
.description__title {
  color: #90e0ef;
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

/* accordion section */
@media (min-width: 768px) {
  .accordion {
    width: 50%;
  }
}

/* poster section */
.poster {
  display: flex;
  height: 80vh;
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
</style>

<!--
per immagini da db: <img :src="`${section.img}`" alt="..." />
-->
