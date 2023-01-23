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
            <button class="btn btn-primary" type="button">
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
        <p>
          Per conoscere i servizi specifici per sede passa alla sezione
          <router-link :to="{ path: '/contatti' }">
            <button type="button" class="btn btn-info">
              contatti
            </button> </router-link
          >.
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

    <!-- poster section -->
    <div
      class="poster container"
      v-for="(service, index) in this.services"
      :key="index"
    >
      <div class="poster__img">
        <img
          :src="
            require(`@/assets/services/${this.serviceInformation[index].img}`)
          "
          alt=".."
        />
        <!-- <img :src="service.image" alt="..." /> -->
      </div>
      <div class="poster__content">
        <h3 class="poster__title">{{ service.name }}</h3>
        <p>{{ this.serviceInformation[index].action }}</p>
        <p class="option">
          <i class="bi bi-caret-right-fill"></i>{{ service.description }}
        </p>
        <a href="#">
          <button type="button" class="btn btn-info">
            Prenota un colloquio adesso!
          </button>
        </a>
      </div>
    </div>

    <div class="grid">
      <div class="col">
        <p class="description__text">
          Alcuni servizi di Animal House possono non essere al momento
          <b>disponibili</b>.<br />Ti incoraggiamo a vedere nella lista che
          segue i servizi prenotabili al momento per animale nelle nostre sedi!
        </p>
      </div>
    </div>

    <!-- accordion section -->
    <div class="accordion container" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(pet, index) in this.pets"
        :key="index"
      >
        <h4 class="accordion-header" :id="`heading${index}`">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${index}`"
            aria-expanded="false"
            :aria-controls="`collapse${index}`"
            @click="this.getBookableServices(`${pet._id}`)"
          >
            <b>{{ pet.name }}</b
            >, servizi prenotabili:
          </button>
        </h4>
        <div
          :id="`collapse${index}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`heading${index}`"
          data-bs-parent="#accordionExample"
        >
          <div
            class="accordion-body"
            v-for="(service, index) in this.servicesPet"
            :key="index"
          >
            Potrai effettuare il servizio di
            <b class="text-info">{{ service.service.name }}</b> presso la sede
            in <b>{{ service.location.address }}</b
            >, <b>{{ service.location.city }}</b
            >. <br />Ancora <b>{{ service.reservation_left }}</b> date
            prenotabili.<br />Affrettati!
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid" id="staff">
      <div class="col">
        <h3 class="description__title big-text">Lo staff</h3>
        <p class="description__text">
          <b>Professionisti Pet care certificati</b>.<br />Altro grande
          vantaggio è quello di avere la sicurezza che tutti coloro che offrono
          un servizio per animali all'interno di Animal House sono
          professionisti del settore.<br />Ciò è possibile grazie ad un
          controllo <b>attento</b> ed accurato.
        </p>
        <p class="mt-2">
          Ci basiamo sul lavoro di squadra!<br />Ecco i nostri dottori di
          <b>spicco</b>!
        </p>
      </div>
    </div>

    <!-- bubble section -->
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-4"
          v-for="(member, index) in this.members"
          :key="index"
        >
          <div class="bubble-member">
            <img
              class="mx-auto rounded-circle"
              :src="require(`@/assets/services/${member.img}`)"
              alt="..."
            />
            <h4 class="member__name">{{ member.name }}</h4>
            <p class="text-muted member__job">{{ member.job }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <p>
          Conosci meglio le menti e i cuori di Animal House passando per la
          pagina
          <router-link :to="{ path: '/chi-siamo' }">
            <button type="button" class="btn btn-info">
              Chi siamo
            </button></router-link
          >.
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
            "I servizi di toilettatura ad Animal House consistono in una lunga serie di processi fondamentali per il benessere dei vostri amici animali; nello specifico questi sono i servizi compresi in una seduta sotto appuntamento nelle nostre sedi:",
        },
        {
          img: "serv1.jpg",
          action:
            "Offrire il massimo del benessere al tuo cane è una priorità, specialmente nelle situazioni in cui non puoi essere presente. Il servizio di dog sitter ad Animal House conta di un personale che, oltre ad essere composto da veri amanti degli animali, è estremamente qualificato e professionale, capace di entrare subito in sintonia con il tuo cane e pronto a risolvere qualsiasi eventuale problematica comportamentale.",
        },
        {
          img: "serv2.jpg",
          action:
            "Affidarsi ad uno studio veterinario e ad un medico competente, e soprattutto empatico, è un fattore determinante per il benessere del tuo animale, offrendogli una qualità di vita migliore. Il servizio ad Animal House comprende:",
        },
        {
          img: "serv3.jpg",
          action:
            "La visita veterinaria è di solito un evento stressante per il tuo gatto? Dopo la prima visita da Animal House siamo certi che il tuo pet non accuserà più queste difficoltà, sapendo di essere in mani delicate e amiche. Vieni nei nostri centri per usufruire di:",
        },
        {
          img: "serv4.jpg",
          action:
            "Non solo cani e gatti, ma anche i nostri amici acquatici hanno diritto ad una cura e una attenzione altrettanto di qualità. Ecco i servizi di Animal House per veterinaria pesci:",
        },
      ],
      members: [
        {
          name: "Dott.ssa Rossella Terragni",
          job: "Direttore sanitario",
          img: "team0.png",
        },
        {
          name: "Dott. Massimo Vignoli",
          job: "Diagnostica per immagini",
          img: "team1.jpg",
        },
        {
          name: "Dott.ssa Valentina Pagliardini",
          job: "Ecografia",
          img: "team2.jpg",
        },
      ],
      locations: [],
      pets: [],
      services: [],
      servicesPet: [],
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
    getBookableServices(petId) {
      axios
        .get(`http://localhost:8000/bookable_services?pet=${petId}`)
        .then((response) => (this.servicesPet = response.data));
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
.btn {
  background-color: #94bbb8;
  color: #fff;
  border: 1px solid black;
}

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

/* poster section */
.poster {
  display: flex;
  height: 80vh;
  width: 100%;
  align-items: center;
}

.poster__title {
  font-size: 55px;
  font-weight: bold;
  color: #90e0ef;
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

.option {
  font-weight: bold;
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

/* accordion section */
.accordion-button,
.accordion-body {
  font-size: 22px;
}

.accordion-button:hover {
  color: #90e0ef;
}

@media (max-width: 768px) {
  .accordion-button,
  .accordion-body {
    font-size: 17px;
  }
}

/* bubble section */
.member__name {
  font-weight: bold;
  font-size: 18px;
  color: #90e0ef;
}

.member__job {
  font-size: 15px;
}
</style>

<!--
per immagini da db: <img :src="`${section.img}`" alt="..." />
-->
