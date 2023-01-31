<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">parlano di noi</h1>
        <h2 class="big-text">
          La storia di <span lang="en" xml:lang="en">Animal House</span>
        </h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/about/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          Questa è una storia di passione e innovazione.<br />
          <b lang="en" xml:lang="en">Animal House</b> è una realtà piccola ma
          dinamica, specializzata nel campo del
          <span lang="en" xml:lang="en">Pet care</span>. Siamo guidati da due
          elementi: <em>passione</em> per il nostro lavoro e la volontà di
          mettere i <em>clienti al centro</em>, animali e padroni. Ci
          impegniamo, giorno dopo giorno, per offrirti tutto questo (e molto
          altro) a portata di
          <span lang="en" xml:lang="en">click</span>.<br />Se stai cercando
          qualcosa di nuovo, sei nel <b><em>posto giusto</em></b
          >.
        </p>
      </div>
    </section>

    <!-- poster section -->
    <section class="poster">
      <main class="poster__content">
        <ol>
          <em>La nostra missione</em>
        </ol>
        <li>
          Selezionare prodotti e servizi <b>eccelsi</b> che garantiscano
          nutrizione, igiene, benessere e amore al vostro animale.
        </li>
        <ol class="mt-5">
          <em>La nostra visione</em>
        </ol>
        <li>
          Fare delle scelte che, se solo potesse,
          <b>sarebbe il tuo amico animale a fare</b>. Quelle, e non altre.
        </li>
      </main>
      <div class="poster__img">
        <video autoplay muted loop alt="">
          <source src="../assets/about/video__poster.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <!-- description section -->
    <section class="grid paragraph">
      <div class="col">
        <h3 class="description__title big-text">
          Come soddisfare i bisogni dei nostri clienti?
        </h3>
        <p class="description__text">
          Qui potrai trovare i <b>migliori</b> prodotti per i tuoi animali, per
          tutti i gusti e occasioni. Lavoriamo a stretto contatto con i
          fornitori per garantire la migliore qualità presente sul mercato e
          offrirti la
          <span lang="fr" xml:lang="fr">crème de la crème</span>.<br />Crediamo
          nell'importanza della <em>qualità</em> e non solo quando di parla di
          prodotti, ma anche quando si parla di assistenza.
        </p>
      </div>
    </section>

    <!-- image-gallery section -->
    <section class="container-fluid">
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
              alt=""
            />
            <router-link
              role="button"
              type="button"
              class="btn"
              :to="{ path: `${client.link}` }"
              >{{ client.direct }}</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- description section -->
    <section class="grid mb-5 paragraph">
      <div class="col">
        <p class="description__text">
          Vuoi accedere al negozio per <b>acquistare</b> tutti i nostri prodotti
          e prenotare una <b>consulenza <em>immediata</em></b> per il tuo
          animale?<br />Passa all'area
          <a
            href="http://localhost:8000/frontoffice/services"
            class="btn btn-danger"
            role="button"
            lang="en"
            xml:lang="en"
          >
            VIP
          </a>
          di <span lang="en" xml:lang="en">Animal House</span>!
        </p>
      </div>
    </section>

    <!-- bubble section -->
    <section class="container-fluid">
      <h3 class="description__title big-text">
        Come nasce <span lang="en" xml:lang="en">Animal House</span>?
      </h3>
      <div class="row">
        <div
          class="col-lg-4"
          v-for="(member, index) in this.members"
          :key="index"
        >
          <menu class="bubble-member">
            <img
              class="mx-auto rounded-circle"
              :src="require(`@/assets/about/${member.img}`)"
              alt=""
            />
            <li>
              <h4>{{ member.name }}</h4>
            </li>
            <li>
              <p class="text-muted">{{ member.animal }}</p>
            </li>
          </menu>
        </div>
      </div>
    </section>

    <!-- description section -->
    <section class="grid py-0 paragraph">
      <div class="col">
        <p class="description__text mb-5 text-center">
          Da tre amici ad una <b><em>comunità</em></b> in continua crescita!<br />
          <i>(alla fine l'abbiamo presa la birra...)</i>
        </p>
      </div>
    </section>

    <!-- timeline section -->
    <TimelineComponent />

    <!-- description section -->
    <section class="grid mt-5 paragraph">
      <div class="col">
        <h3 class="description__title big-text">
          Le persone di <span lang="en" xml:lang="en">Animal House</span>
        </h3>
        <p class="description__text">
          Il nostro <span lang="en" xml:lang="en">staff</span> è composto da
          oltre 100 persone che lavorano come
          <b lang="en" xml:lang="en">Pet care specialist</b> e tutti siamo
          determinati nel diffondere la <em>passione</em> e la
          <em>cura</em> degli animali a coloro a cui veniamo in contatto.<br />
          Facendo di questa <b><em>dedizione</em></b> un lavoro, avanziamo
          sostenendo questi valori nel
          <span lang="en" xml:lang="en">team</span>, convinti che il successo
          dell'azienda scorra attraverso la valorizzazione e la realizzazione
          del <em>contributo di ciascuno</em>.
        </p>
      </div>
    </section>

    <!-- keywords section -->
    <section class="container-fluid">
      <div class="row mt-3 keyword">
        <menu
          class="col-md-4"
          v-for="(keyword, index) in this.keywords"
          :key="index"
        >
          <img :src="require(`@/assets/about/${keyword.img}`)" alt="" />
          <li>
            <h4>{{ keyword.title }}</h4>
          </li>
        </menu>
      </div>
    </section>

    <!-- description section -->
    <section class="grid mt-5 paragraph">
      <div class="col">
        <h3 class="description__title big-text">Resta in contatto con noi!</h3>
        <p class="description__text">
          A volte sappiamo meglio di te quello di cui hai <b>bisogno</b> e di
          <em>cosa necessita</em> il tuo amico animale.<br />Per avere
          informazioni sui prodotti in negozio o indicazioni sui servizi
          contattaci passando alla sezione dedicata.<br />
          <router-link
            :to="{ path: '/contatti' }"
            role="button"
            class="btn btn-danger mt-3"
          >
            chiamaci
          </router-link>
        </p>
      </div>
    </section>
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
  color: #000;
  border: 1px solid black;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
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
  list-style-type: none;
  width: 45%;
  padding: 20px;
  font-size: 20px;
}

.poster__content ol {
  color: #f84444;
  font-size: 44px;
  font-weight: bolder;
}

@media (max-width: 768px) {
  .poster {
    height: 100%;
  }

  .poster__content ol {
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

.bubble-member li {
  list-style-type: none;
}

/* keywords section */
.keyword {
  text-align: center;
  padding: 0;
}

.keyword li {
  list-style-type: none;
}

.keyword h4 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #b1101b;
  margin-top: 5px;
}
</style>
