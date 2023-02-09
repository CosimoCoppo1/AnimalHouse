<template>
  <div>
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">
          Per i nuovi clienti o per i nostri affezzionati
        </h1>
        <h2 class="big-text">
          Benvenuti ad <span lang="en" xml:lang="en">Animal House</span>
        </h2>
        <h3 class="mt-5 fw-bold">
          Negozio, servizi, giochi, curiosità... Tutto questo in un unico
          sito!<br />Naviga senza limiti e fatti coinvolgere dalla nostra
          passione<br />per il lavoro che facciamo ogni giorno, venendo<br />
          incontro a voi e ai vostri compagni animali.
        </h3>
        <div class="buttons mt-4">
          <router-link
            :to="{ path: '/dati-personali' }"
            role="button"
            class="btn btn-warning data link access"
          >
            Accedi
          </router-link>
        </div>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/home/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          Noi di <b lang="en" xml:lang="en">Animal House</b> siamo come una
          <em>famiglia</em>: <b>non lasciamo indietro nessuno</b>.<br />
          Fin da quando siamo nati, il nostro <em>desiderio</em> era quello di
          essere una comunità di begli ideali e belle persone... così come anche
          <b>bei clienti</b>!<br />
          Offriamo tante esperienze per la <em>conoscenza</em> e il
          <em>piacere</em> degli animali e non sono: veniamo incontro anche a
          tutti i padroni con attenzioni che derivano solamente dalla
          <b>passione per il nostro lavoro</b>.
        </p>
      </div>
    </section>

    <section class="poster mt-3">
      <section class="poster__content">
        <h3 class="big-text title-color">
          Negozio <span lang="en" xml:lang="en">Animal House</span>
        </h3>
        <p>
          <b>Amare il proprio animale</b> significa anche scegliere per lui i
          migliori prodotti che si <em>adattino</em> alla sua quotidianità e ai
          suoi ritmi di vita.<br />
          Con <span lang="en" xml:lang="en">Animal House</span> questo semplice
          <em>principio</em> è sempre rispettato, e portiamo avanti con
          <em>rigore</em> la ricerca dei prodotti di <em>migliore</em> qualità
          per tutti i <span lang="en" xml:lang="en">pet</span>.
        </p>
        <p>Vedi tutti i nostri prodotti cliccando il bottone!</p>
        <div class="buttons">
          <router-link
            :to="{ path: '/negozio' }"
            role="button"
            class="btn btn-warning access link"
          >
            Vai al negozio!
          </router-link>
        </div>
      </section>
      <div class="poster__img">
        <img src="../assets/home/gallery1.jpg" alt="" />
      </div>
    </section>

    <section class="poster mt-3">
      <div class="poster__img">
        <img src="../assets/home/gallery0.jpg" alt="" />
      </div>
      <section class="poster__content">
        <h3 class="big-text title-color">
          Servizi <span lang="en" xml:lang="en">Animal House</span>
        </h3>
        <p>
          <em>Prendersi cura</em> degli animali è la
          <b>parola <em>chiave</em></b> in tutti i nostri servizi, e i nostri
          professionisti del <span lang="en" xml:lang="en">Pet care</span> hanno
          <em>a cuore</em> la salute dei nostri clienti e dei loro padroni.<br />
          I nostri studi sono in <b>continuo aggiornamento</b>, per permettervi
          di ottenere i migliori trattamenti per una vita sana e piacevole.<br />
          Relativamente "nuovi" nel mercato delle aziende
          <span lang="en" xml:lang="en">specialist</span> del
          <span lang="en" xml:lang="en">Pet care</span> abbiamo tanta
          <em>voglia</em> di affermarci e proporre nuovi orizzonti per il campo.
        </p>
        <p>Vedi tutti i nostri servizi cliccando il bottone!</p>
        <div class="buttons">
          <router-link
            :to="{ path: '/servizi' }"
            role="button"
            class="btn btn-warning access link"
          >
            Vedi i servizi!
          </router-link>
        </div>
      </section>
    </section>

    <section class="bg-cover mt-3">
      <div class="bg-cover__title">
        <h3 class="big-text title-color">Riguardo a noi...</h3>
      </div>
      <div class="bg-cover__text">
        <h4 class="fw-bold">
          Come nasce <span lang="en" xml:lang="en">Animal House</span>
        </h4>
        <p>
          Da un gruppo di amici ad una <em>comunità</em> ancora in crescita.<br />
          Scopri tutto ciò che significa essere membro e socio di
          <span lang="en" xml:lang="en">Animal House</span>!<br />
          Una storia di <em>passione</em>, <em>attenzione</em> e
          <em>ascolto</em>.<br />Passa alla sezione:<router-link
            :to="{ path: '/chi-siamo' }"
            class="link"
          >
            chi siamo
          </router-link>
          per conoscerci meglio!
        </p>

        <h4 class="fw-bold">Entra in contatto con <em>noi</em></h4>
        <p>
          Vuoi farci una domanda? Vuoi avere informazioni sui tuoi ordini o
          richiedi una qualsiasi altra informazione?<br />Passa alla sezione
          <router-link :to="{ path: '/contatti' }" class="link"
            >contatti</router-link
          >
          per scrivere alla nostra casella di posta elettronica o contattarci
          tramite numero teleefonico.
        </p>

        <h4 class="fw-bold">
          Altre sezioni di <span lang="en" xml:lang="en">Animal House</span>
        </h4>
        <p>
          Passa alla sezione
          <a href="http://localhost:8000/frontoffice" class="link"
            ><span lang="en" xml:lang="en">VIP</span></a
          >
          per usufruire di tutti i servizi senza limitazioni e comprare
          direttamente i prodotti dal nostro negozio. Tante altre sorprese al
          <span lang="en" xml:lang="en">link</span> che scoprirai solamente
          provando!<br />
          Passa alla sezione
          <a href="http://localhost:8000/backoffice" class="link">riservata</a>
          se sei un dipendente
          <span lang="en" xml:lang="en">Animal House</span>.
        </p>
      </div>
    </section>

    <section class="panel-blue mt-3">
      <div class="grid panel-blue">
        <div class="col panel-blue__dots">
          <router-link
            :to="{ path: '/giochi/memory' }"
            role="button"
            class="dot"
          >
            <img src="../assets/games/gallery2.png" alt="" />
            <p hidden>Gioca al <span lang="en" xml:lang="en">memory</span></p>
          </router-link>
          <router-link :to="{ path: '/giochi/quiz' }" role="button" class="dot">
            <img src="../assets/games/gallery3.png" alt="" />
            <p hidden>Gioca al <span lang="en" xml:lang="en">quiz</span></p>
          </router-link>
          <router-link
            :to="{ path: '/giochi/morra-cinese' }"
            role="button"
            class="dot"
          >
            <img src="../assets/games/gallery4.png" alt="" />
            <p hidden>Gioca a morra cinese</p>
          </router-link>
          <router-link
            :to="{ path: '/giochi/scarabeo' }"
            role="button"
            class="dot"
          >
            <img src="../assets/games/gallery5.png" alt="" />
            <p hidden>Gioca a scarabeo</p>
          </router-link>
        </div>
        <div class="col panel-blue__text">
          <div class="grid">
            <div class="col">
              <h3 class="big-text text-color">Sezione giochi</h3>
            </div>
            <div class="col m-4">
              <p class="mt-2">
                Non <em>solo</em> negozio e servizi...<br /><span
                  lang="en"
                  xml:lang="en"
                  >Animal House</span
                >
                offre anche altro:
                <b><em>divertiti</em> con i nostri giochi a tema animale</b>,
                scegliendo tra <i lang="en" xml:lang="en">memory</i> con carte
                di animali da differenti parti del mondo e
                <i lang="en" xml:lang="en">quiz</i> su tante specie!<br />
                Non perdere anche la <i>morra cinese</i> con particolare sasso,
                carta e forbice e il gioco <i>scarabeo</i> su
                <span lang="en" xml:lang="en">habitat</span> e alimentazione
                degli animali!<br />
              </p>
              <p>
                Entra nella sezione
                <router-link :to="{ path: '/giochi' }" class="link"
                  >giochi</router-link
                >
                o inizia le partite direttamente dai bollini a fianco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid" style="margin-bottom: 100px">
      <div class="col">
        <div>
          <h3 class="big-text text-color">
            Dimentichi <br />
            qualcosa...
          </h3>
        </div>
      </div>
      <div class="col">
        <p class="mt-2">
          Oltre ai giochi, divertiti a immergerti in un mondo di curiosità sul
          mondo animale!<br />Impara ogni giorno!
        </p>
        <div class="buttons">
          <router-link
            class="btn btn-warning access link"
            role="button"
            :to="{ path: '/informazioni-curiose' }"
            >Scopri le curiosità</router-link
          >
        </div>
      </div>
    </section>
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

<style scoped>
.link {
  text-decoration: none;
}

.title-color {
  color: #03045e;
}

.buttons {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.buttons button,
.buttons .link {
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 15px 0;
  font-size: 16px;
  border-radius: 5px;
  width: calc(100% / 2 - 8px);
  border: 1px solid #000;
}

.buttons .data {
  width: 15% !important;
}

.buttons .access {
  color: #fff;
  background-color: #03045e;
}

@media (max-width: 768px) {
  .buttons .data {
    width: 40% !important;
  }
}

/* hero section */
.hero {
  height: 100vh;
}

.hero__content h1,
.hero__content h2,
.hero__content h3 {
  color: #03045e;
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
  background: url("../assets/quiz/bg__poster.jpg") no-repeat center center;
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
  padding: 100px 30px;
}

.dot {
  height: 250px;
  width: 250px;
  border-radius: 100%;
  line-height: 250px;
  text-align: center;
  display: inline-block;
  margin-right: 40px;
  margin-bottom: 40px;
}

.dot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid #03045e;
}

.panel-blue__text {
  display: flex;
  align-items: center;
}
</style>
