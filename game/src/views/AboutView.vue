<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">parlano di noi</p>
        <h1 class="big-text">La storia di Animal House</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/about/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          Questa è una storia di passione e innovazione.<br />
          <b>Animal House</b> è una realtà piccola ma dinamica, specializzata
          nel campo del Pet care. Siamo guidati da due elementi: passione per il
          nostro lavoro e la volontà di mettere i clienti al centro, animali e
          padroni. Ci impegniamo, giorno dopo giorno, per offrirti tutto questo
          (e molto altro) a portata di click.<br />Se stai cercando qualcosa di
          nuovo, sei nel <b>posto giusto</b>.
        </p>
      </div>
    </div>

    <!-- poster section -->
    <div class="poster">
      <div class="poster__content">
        <h3>La nostra missione</h3>
        <p>
          Selezionare prodotti e servizi <b>eccelsi</b> che garantiscano
          nutrizione, igiene, benessere e amore al vostro animale.
        </p>
        <h3 class="mt-5">La nostra visione</h3>
        <p>
          Fare delle scelte che, se solo potesse,
          <b>sarebbe il tuo amico animale a fare</b>. Quelle, e non altre.
        </p>
      </div>
      <div class="poster__img">
        <video autoplay muted loop>
          <source src="../assets/about/video__poster.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="description__title big-text">
          Come soddisfare i bisogni dei nostri clienti?
        </h3>
        <p class="description__text">
          Qui potrai trovare i <b>migliori</b> prodotti per i tuoi animali, per
          tutti i gusti e occasioni. Lavoriamo a stretto contatto con i
          fornitori per garantire la migliore qualità presente sul mercato e
          offrirti la crème de la crème.<br />Crediamo nell'importanza della
          qualità e non solo quando di parla di prodotti, ma anche quando si
          parla di assistenza.
        </p>
      </div>
    </div>

    <!-- image-gallery section -->
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-6"
          v-for="(client, index) in this.clients"
          :key="index"
          :align="`${client.position}`"
        >
          <div class="image__container">
            <img
              :src="require(`@/assets/about/${client.img}`)"
              class="image"
              alt=".."
            />
            <router-link
              type="button"
              class="btn"
              :to="{ path: `${client.link}` }"
              >{{ client.direct }}</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid mb-5">
      <div class="col">
        <p class="description__text">
          Vuoi accedere al negozio per <b>acquistare</b> tutti i nostri prodotti
          e prenotare una <b>consulenza immediata</b> per il tuo animale?<br />Passa
          all'area
          <a href="http://localhost:8000/frontoffice/services">
            <button class="btn btn-danger" type="button">VIP</button>
          </a>
          di Animal House!
        </p>
      </div>
    </div>

    <!-- bubble section -->
    <div class="container-fluid">
      <h3 class="description__title big-text">Come nasce Animal House?</h3>
      <div class="row">
        <div
          class="col-lg-4"
          v-for="(member, index) in this.members"
          :key="index"
        >
          <div class="bubble-member">
            <img
              class="mx-auto rounded-circle"
              :src="require(`@/assets/about/${member.img}`)"
              alt="..."
            />
            <h4>{{ member.name }}</h4>
            <p class="text-muted">{{ member.animal }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid py-0">
      <div class="col">
        <p class="description__text mb-5 text-center">
          Da tre amici ad una <b>comunità</b> in continua crescita!<br />
          <i>(alla fine l'abbiamo presa la birra...)</i>
        </p>
      </div>
    </div>

    <!-- timeline section -->
    <TimelineComponent />

    <!-- description section -->
    <div class="grid mt-5">
      <div class="col">
        <h3 class="description__title big-text">Le persone di Animal House</h3>
        <p class="description__text">
          Il nostro staff è composto da oltre 100 persone che lavorano come
          <b>Pet care specialist</b> e tutti siamo determinati nel diffondere la
          passione e la cura degli animali a coloro a cui veniamo in
          contatto.<br />
          Facendo di questa <b>dedizione</b> un lavoro, avanziamo sostenendo
          questi valori nel team, convinti che il successo dell'azienda scorra
          attraverso la valorizzazione e la realizzazione del contributo di
          ciascuno.
        </p>
      </div>
    </div>

    <!-- keywords section -->
    <div class="container-fluid">
      <div class="row mt-3 keyword">
        <div
          class="col-md-4"
          v-for="(keyword, index) in this.keywords"
          :key="index"
        >
          <img :src="require(`@/assets/about/${keyword.img}`)" alt=".." />
          <h4>{{ keyword.title }}</h4>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid mt-5">
      <div class="col">
        <h3 class="description__title big-text">Resta in contatto con noi!</h3>
        <p class="description__text">
          A volte sappiamo meglio di te quello di cui hai <b>bisogno</b> e di
          cosa necessita il tuo amico animale.<br />Per avere informazioni sui
          prodotti in negozio o indicazioni sui servizi contattaci passando alla
          sezione dedicata.<br />
          <router-link :to="{ path: '/contatti' }">
            <button type="button" class="btn btn-danger mt-3">chiamaci</button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineComponent from "../components/TimelineComponent.vue";

export default {
  name: "AboutView",
  components: { TimelineComponent },
  data() {
    return {
      clients: [
        {
          position: "right",
          img: "gallery1.jpg",
          link: "/negozio",
          direct: "negozio",
        },
        {
          position: "left",
          img: "gallery2.jpg",
          link: "/servizi",
          direct: "servizi",
        },
      ],
      members: [
        {
          name: "Cosimo Coppolaro",
          animal: "ha un pappagallo e un cane",
          img: "team1.jpg",
        },
        {
          name: "Francesca Mazzetti",
          animal: "ha un cane e un gatto",
          img: "team2.jpg",
        },
        { name: "Luca Orlandello", animal: "ha due cani", img: "team3.jpg" },
      ],
      keywords: [
        { title: "Puntiamo sulla personalità di ognuno", img: "button1.png" },
        { title: "Sviluppiamo le competenze individuali", img: "button2.png" },
        { title: "Incoraggiamo le nuove idee", img: "button3.png" },
      ],
    };
  },
};
</script>

<style scoped>
.btn {
  background-color: #ff6868;
  color: #fff;
  border: 1px solid black;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content p {
  color: #f84444;
}

/* poster section */
.poster {
  height: 80vh;
  background: url("../assets/curiosity/bg__poster.png") no-repeat center center;
}

.poster__img {
  width: 55%;
}

.poster__img video {
  border-radius: 20px;
}

.poster__content {
  width: 45%;
  padding: 20px;
  font-size: 20px;
}

.poster__content h3 {
  color: #f84444;
  font-size: 44px;
  font-weight: bolder;
}

@media (max-width: 768px) {
  .poster {
    height: 100%;
  }

  .poster__content h3 {
    font-size: 33px;
  }

  .poster__img,
  .poster__content {
    width: 100%;
  }
}

/* description section */
.description__title,
.link {
  color: #f84444;
}

/* client section */
.image {
  border-radius: 20px;
}

.image__container .btn:hover {
  background-color: #f84444;
}

/* bubble section */
.bubble-member h4 {
  margin-top: 25px;
  margin-bottom: 0;
  font-weight: bold;
}
.bubble-member p {
  margin-top: 0;
}

/* keywords section */
.keyword {
  text-align: center;
  padding: 0;
}

.keyword h4 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #f84444;
  margin-top: 5px;
}
</style>
