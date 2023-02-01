<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">a misura di animale</h1>
        <h2 class="big-text">
          Servizi di <span lang="en" xml:lang="en">Animal House</span>
        </h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/services/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          <span lang="en" xml:lang="en">Animal House</span> è un progetto che
          desidera avere un <b><em>impatto</em></b> sulle persone che
          condividono la propria vita con gli animali.<br />È nell'<em
            >atto del prendersi cura</em
          >
          che si collocano i nostri servizi e i nostri professionisti del
          <span lang="en" xml:lang="en">Pet care</span>: siamo tra i primi nel
          settore del <b lang="en" xml:lang="en">Pet care specialism</b>.
        </p>
      </div>
    </section>

    <!-- image gallery section -->
    <section class="container-fluid image-gallery">
      <div class="row">
        <div
          class="col-md-12 col-lg-4"
          v-for="(client, index) in this.clients"
          :key="index"
          :align="`${client.position}`"
        >
          <div class="image__container">
            <img
              :src="require(`@/assets/services/${client.img}`)"
              class="image"
              alt=""
            />
            <a type="button" class="btn" :href="`${client.link}`">{{
              client.direct
            }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- description section -->
    <section class="grid paragraph" id="sedi">
      <div class="col">
        <h3 class="description__title big-text">Le sedi</h3>
        <p class="description__text">
          <span lang="en" xml:lang="en">Animal House</span> nasce per offrire un
          servizio moderno ed efficiente per la cura e la prevenzione di tutte
          le patologie degli animali da compagnia. Offriamo la nostra
          <em>esperienza professionale</em> maturata negli anni con continuo
          aggiornamento <em>a disposizione</em> per il <b>benessere</b> e la
          <b>cura</b> dei vostri animali.<br />Ci avvaliamo inoltre della
          collaborazione di specialisti nelle varie discipline.
        </p>
        <h4 class="description__text">
          Per conoscere i servizi specifici per sede passa alla sezione
          contatti.
        </h4>
      </div>
    </section>

    <!-- locations section -->
    <section class="container mt-4">
      <ol
        class="location__container"
        v-for="(location, index) in this.locations"
        :key="index"
      >
        <li class="location__city">{{ location.city }}</li>
        <li class="location__address">{{ location.address }}</li>
      </ol>
    </section>

    <!-- alert section -->
    <section class="container alert alert-info" role="alert">
      Prenota subito un appuntamento passando all'area
      <a
        href="http://localhost:8000/frontoffice/"
        class="link"
        lang="en"
        xml:lang="en"
        >VIP</a
      >
      di <span lang="en" xml:lang="en">Animal House</span>.
    </section>

    <main>
      <!-- description section -->
      <section class="grid paragraph" id="servizi">
        <div class="col">
          <h3 class="description__title big-text">I nostri servizi</h3>
          <p class="description__text">
            <b>Semplicità</b> e <b>intuitività</b> sono le caratteristiche
            principali che rendono
            <span lang="en" xml:lang="en">Animal House</span> un sistema che
            offre una serie di servizi per animali domestici finalizzati a
            <em>migliorare</em> il benessere della vita del tuo amico a quattro
            zampe, e non solo, e a rafforzare il rapporto con il
            proprietario.<br />
            <span lang="en" xml:lang="en">Animal House</span> è infatti il
            <em>primo sito</em> con servizio di
            <b>prenotazione</b> specificamente progettata per il mondo
            <span lang="en" xml:lang="en">pet</span>, a cui si possono rivolgere
            sia chi ha dedicato il proprio lavoro agli animali, sia per chi ne
            fa richiesta.<br />Prenota un
            <a href="http://localhost:8000/frontoffice/services" class="link"
              ><b>colloquio</b></a
            >
            adesso, per il benessere del tuo pet
            <span lang="en" xml:lang="en">pet</span> in un
            <span lang="en" xml:lang="en">network</span> con innumerevoli
            servizi.
          </p>
        </div>
      </section>

      <!-- poster section -->
      <section
        class="poster container"
        v-for="(service, index) in this.services"
        :key="index"
      >
        <div class="poster__img">
          <img :src="service.image" alt="" />
        </div>
        <ol class="poster__content">
          <li>
            <h4 class="poster__title">{{ service.name }}</h4>
          </li>
          <p class="option">
            <i class="bi bi-caret-right-fill"></i>{{ service.description }}
          </p>
        </ol>
      </section>

      <section class="grid paragraph">
        <div class="col">
          <p class="description__text">
            Alcuni servizi di
            <span lang="en" xml:lang="en">Animal House</span> possono non essere
            al momento <b>disponibili</b>.<br />Ti incoraggiamo a vedere nella
            lista che segue i servizi <em>prenotabili</em> al momento per
            animale nelle nostre sedi!
          </p>
        </div>
      </section>

      <!-- accordion section -->
      <section class="accordion container" id="accordionExample">
        <div
          class="accordion-item"
          v-for="(pet, index) in this.pets"
          :key="index"
        >
          <h5 class="accordion-header" :id="`heading${index}`">
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
          </h5>
          <div
            :id="`collapse${index}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`heading${index}`"
            data-bs-parent="#accordionExample"
          >
            <section
              class="accordion-body"
              v-for="(service, index) in this.servicesPet"
              :key="index"
            >
              Potrai effettuare il servizio di
              <b>{{ service.service.name }}</b> presso la sede in
              <b>{{ service.location.address }}</b
              >, <b>{{ service.location.city }}</b
              >. <br />Ancora <b>{{ service.reservation_left }}</b> date
              prenotabili.<br />Affrettati!
            </section>
          </div>
        </div>
      </section>
    </main>

    <!-- description section -->
    <section class="grid mt-3 paragraph" id="staff">
      <div class="col">
        <h3 class="description__title big-text">
          Lo <span lang="en" xml:lang="en">staff</span>
        </h3>
        <p class="description__text">
          <b
            >Professionisti
            <span lang="en" xml:lang="en">Pet care</span> certificati</b
          >.<br />Altro grande vantaggio è quello di avere la
          <em>sicurezza</em> che tutti coloro che offrono un servizio per
          animali all'interno di
          <span lang="en" xml:lang="en">Animal House</span> sono
          <em>professionisti</em> del settore.<br />Ciò è possibile grazie ad un
          controllo <b>attento</b> ed accurato.
        </p>
        <p class="description__text mt-2">
          Ci basiamo sul lavoro di squadra!<br />Ecco i nostri dottori di
          <b>spicco</b>!
        </p>
      </div>
    </section>

    <!-- bubble section -->
    <section class="container-fluid">
      <div class="row">
        <div
          class="col-lg-4"
          v-for="(member, index) in this.members"
          :key="index"
        >
          <menu class="bubble-member">
            <img
              class="mx-auto rounded-circle"
              :src="require(`@/assets/services/${member.img}`)"
              :alt="member.alt"
            />
            <li>
              <h4 class="member__name">{{ member.name }}</h4>
              <p class="text-muted member__job">{{ member.job }}</p>
            </li>
          </menu>
        </div>
      </div>
    </section>

    <!-- description section -->
    <section class="grid paragraph">
      <div class="col">
        <h5 class="description__text">
          Conosci meglio le menti e i cuori di
          <span lang="en" xml:lang="en">Animal House</span> passando per la
          pagina
          <router-link
            :to="{ path: '/chi-siamo' }"
            role="button"
            class="btn btn-info"
          >
            Chi siamo </router-link
          >.
        </h5>
      </div>
    </section>
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
      members: [
        {
          name: "Dott.ssa Rossella Terragni",
          job: "Direttore sanitario",
          img: "team0.png",
          alt: "Foto Dott.ssa Rossella Terragni",
        },
        {
          name: "Dott. Massimo Vignoli",
          job: "Diagnostica per immagini",
          img: "team1.jpg",
          alt: "Foto Dott. Massimo Vignoli",
        },
        {
          name: "Dott.ssa Valentina Pagliardini",
          job: "Ecografia",
          img: "team2.jpg",
          alt: "Foto Dott.ssa Valentina Pagliardini",
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

<style scoped>
.link {
  color: #8e00ec;
  text-decoration: none;
}

.btn {
  background-color: #006eec;
  color: #fff;
  border: 1px solid black;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #006eec;
}

/* image gallery section */
.image-gallery {
  background: url("../assets/curiosity/bg__poster.png") no-repeat center center;
}

.image__container .btn:hover {
  background-color: #006eec;
}

/* description section */
.description__title {
  color: #006eec;
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
  list-style-type: none;
}

.location__address {
  font-size: 22px;
  list-style-type: none;
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
  color: #006eec;
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
  list-style-type: none;
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

  .poster__title {
    font-size: 40px;
  }
}

/* accordion section */
.accordion-button,
.accordion-body {
  font-size: 22px;
}

.accordion-body b {
  color: #006eec;
}

.accordion-button:hover {
  color: #006eec;
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
  color: #006eec;
}

.member__job {
  font-size: 15px;
}

.bubble-member li {
  list-style-type: none;
}
</style>

<!--
per immagini da db: <img :src="`${section.img}`" alt="..." />
-->
