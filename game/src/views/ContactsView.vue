<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">Come possiamo aiutarti?</h1>
        <h2 class="big-text">Assistenza clienti</h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/contacts/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          Vieni a <em>trovarci</em>!<br />Non vediamo l'ora di
          <b><em>conoscerti</em></b> e mostrarti tutte le soprese e le
          opportunità che riserviamo ai nostri clienti.
        </p>
      </div>
    </section>

    <main>
      <!--description section -->
      <section class="grid paragraph">
        <div class="col">
          <p class="description__text">
            <span lang="en" xml:lang="en">Animal House</span> è una nuova ma
            importante realtà nel settore
            <b lang="en" xml:lang="en">Pet care</b>: conta di
            <b>{{ this.locations.length }} sedi</b> sparse per il territorio
            italiano, e offre una varietà di servizi per il benessere completo
            dei tuoi animali domestici.<br />
            Sotto trovi le modalità con cui entrare in <b>contatto</b> con i
            nostri operatori.
          </p>
        </div>
      </section>

      <!-- card section -->
      <section class="row row-cols-1 row-cols-md-2 row-cols-lg-3 actions mb-5">
        <div v-for="(action, index) in this.actions" :key="index" class="col">
          <div class="card-container mx-auto mt-5">
            <div class="card">
              <div class="card__image">
                <img
                  :src="require(`@/assets/contacts/${action.img}`)"
                  alt=""
                  :style="{
                    'background-color': this.changeColor(`${index}`),
                  }"
                />
              </div>
              <section class="card__body">
                <h3>
                  <em>{{ action.type }}</em>
                </h3>
                <p v-html="action.description"></p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- description section -->
    <section class="grid paragraph">
      <div class="col">
        <p class="description__text">
          Non perdere i <b><em>benefici</em></b> dell'essere un
          <em>membro</em> della comunità
          <span lang="en" xml:lang="en">Animal House!</span><br />Con un
          <span lang="en" xml:lang="en">click</span> passa alla sezione
          <a
            href="http://localhost:8000/frontoffice/"
            role="button"
            class="btn btn-danger border"
          >
            <span lang="en" xml:lang="en">VIP</span>
          </a>
          e siamo <b>sicuri</b> che rimarrai <em>soddisfatto</em> della tua
          scelta!
        </p>
      </div>
    </section>

    <!-- description section -->
    <section class="grid paragraph">
      <div class="col">
        <h3 class="description__title big-text">Dove trovarci</h3>
        <p class="description__text">
          Clicca l'icona relativa alla sede per conoscere i servizi specifici
          offerti in ogni punto vendita
          <span lang="en" xml:lang="en">Animal House</span>.<br />Per conoscere
          le date disponibili, i prezzi e prenotare subito un appuntamento,
          contattaci secondo le modalità sopra indicate o passa alla sezione

          <a href="http://localhost:8000/frontoffice/services" class="link"
            >servizi</a
          >
          nell'applicazione.
        </p>
      </div>
    </section>

    <!-- accordion section -->
    <section class="accordion container" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(location, index) in this.locations"
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
            @click="this.getBookableServices(`${location._id}`)"
          >
            <b>{{ location.city }}</b
            >, {{ location.address }}
          </button>
        </h4>
        <div
          :id="`collapse${index}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`heading${index}`"
          data-bs-parent="#accordionExample"
        >
          <section
            class="accordion-body"
            v-for="(service, index) in this.servicesLocation"
            :key="index"
          >
            Potrai effettuare presso la sede il servizio di
            <b class="text-warning">{{ service.service.name }}</b> per
            <b class="text-warning">{{ service.pet.name }}</b
            >.
          </section>
        </div>
      </div>
    </section>

    <!-- description section -->
    <section class="grid paragraph">
      <div class="col">
        <h3 class="description__title big-text">Domande più frequenti</h3>
        <p class="description__text mb-4">
          Una raccolta di domande e risposte che possono aiutarti ad avere una
          serena navigazione sul sito.
        </p>
      </div>
    </section>

    <!-- faqs section -->
    <section class="container">
      <ol
        class="faqs__container"
        v-for="(faq, index) in this.faqs"
        :key="index"
      >
        <li class="faqs__question" v-html="faq.question"></li>
        <li class="faqs__answer" v-html="faq.answer"></li>
      </ol>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactsView",
  data() {
    return {
      locations: [],
      servicesLocation: [],
      actions: [
        {
          type: "Chiama",
          description:
            "Per una risposta <em>IMMEDIATA</em> chiama al numero di ufficio <address>3295817284</address>Dal Lunedì al Venerdì dalle <time datetime='9:00'>9:00</time> alle <time datetime='17:00'>17:00</time>.",
          img: "icon1.png",
        },
        {
          type: "Scrivi",
          description:
            "Scrivi al nostro contatto <span lang='en' xml:lang='en'>email</span> <address>assistenza@animalhouse.it</address>Ti risponderemo ENTRO <time datetime='PT24H'>24h</time> dalla richiesta.",
          img: "icon2.png",
        },
        {
          type: "Chatta",
          description:
            "Vuoi entrare in contatto con i membri della <a href='http://localhost:8000/frontoffice/community' style='color: #662e9b' lang='en' xml:lang='en'>community</a> <span lang='en' xml:lang='en'>Animal House</span>? Accedi all'area <span lang='en' xml:lang='en'>VIP</span> per usufruire del servizio.",
          img: "icon3.png",
        },
      ],
      colors: ["#fcff6c", "#5dd9c1", "#e0acd5"],
      faqs: [
        {
          question: "In che valuta sono i prezzi sul sito?",
          answer: "Tutti i prezzi sono in euro.",
        },
        {
          question:
            "I prezzi presenti sul sito <span lang='en' xml:lang='en'>internet</span> sono compresi di <abbr>IVA</abbr>?",
          answer: "Sì, tutti i prezzi includono l'<abbr>IVA</abbr>.",
        },
        {
          question: "In quando tempo un ordine viene spedito?",
          answer:
            "Facciamo del nostro meglio per spedire gli articoli il più velocemente possibile. Avremo bisogno dai 3 ai 6 giorni di tempo di produzione per la spedizione dell'ordine; i tempi di spedizione medi sono di 4-8 giorni.",
        },
        {
          question:
            "<span lang='en' xml:lang='en'>Animal House</span> spedisce all'estero?",
          answer:
            "No. La vendita e la consegna della merce sono limitate allo Stato Italiano.",
        },
        {
          question:
            "Come posso fare in caso di problemi di navigazione e/o problemi di visualizzazione sul sito?",
          answer:
            "Puoi segnalarcelo immediatamente utilizzando il <span lang='en' xml:lang='en'>form</span> di contatto o inviandoci una <span lang='en' xml:lang='en'>email</span> all'indirizzo <address>assistenza@animalhouse.it</address>",
        },
        {
          question:
            "Chi posso contattare in caso di problemi nella fase di acquisto e/o problemi tecnici?",
          answer:
            "Puoi contattarci via <span lang='en' xml:lang='en'>email</span> o chiamandoci da Lunedì al Venerdì dalle <time datetime='9:00'>9:00</time> alle <time datetime='17:00'>17:00</time>.",
        },
        {
          question: "Cosa succede se il prodotto che ho ordinato è esaurito?",
          answer:
            "Nel caso straordinario in cui un prodotto risulti esaurito, puoi contattarci per informarti sugli eventuali tempi di attesa e/o per proporti uno o più articoli equivalenti.",
        },
        {
          question:
            "Ho una domanda a cui non è stata data risposta, come posso essere aiutato?",
          answer:
            "Siamo qui per aiutarti! Invia una <span lang='en' xml:lang='en'>email</span> a <address>assistenza@animalhouse.it</address> e saremo felici di assisterti in ogni modo possibile.",
        },
      ],
    };
  },
  methods: {
    changeColor(index) {
      for (let i = 0; i <= 2; i++) {
        if (index % 3 == i) {
          return this.colors[i];
        }
      }
    },
    getLocations() {
      axios
        .get("http://localhost:8000/locations")
        .then((response) => (this.locations = response.data));
    },
    getBookableServices(locationId) {
      axios
        .get(`http://localhost:8000/bookable_services?location=${locationId}`)
        .then((response) => (this.servicesLocation = response.data));
    },
  },
  created() {
    this.getLocations();
  },
};
</script>

<style scoped>
.btn {
  background-color: #7000f0;
  color: #fff;
  border: 1px solid black;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #7000f0;
}

/* description section */
.description__title {
  color: #7000f0;
}

/* faqs section */
.faqs__container {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 30px;
  text-align: left;
  padding: 5px 15px;
}

.faqs__question {
  list-style-type: none;
  font-weight: bold;
  font-size: 20px;
  color: #7000f0;
}

.faqs__answer {
  list-style-type: none;
  font-size: 19px;
}

@media (max-width: 768px) {
  .faqs__question {
    font-size: 18px;
  }

  .faqs__answer {
    font-size: 17px;
  }
}

/* card section */
.card-container {
  width: 18rem;
  perspective: 200rem;
  position: relative;
  height: 360px;
}

.card {
  transition: all 0.9s;
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
}

.card__image {
  text-align: center;
  margin-top: 40px;
  border-radius: 0%;
  padding: 5px;
}

.card__image img {
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  text-align: center;
  border: 2px solid black;
}

.card__image img:hover {
  scale: 1.05;
}

.card__body h3 {
  text-align: center;
  margin: 15px auto;
  font-weight: 900;
  font-size: 20px;
}

.card__body p {
  margin: auto 25px;
}

@media (max-width: 768px) {
  .actions {
    background: url("../assets/curiosity/bg__poster.png") no-repeat center
      center;
  }
}

/* accordion section */
.link {
  color: #7000f0;
}

.accordion-button,
.accordion-body {
  font-size: 22px;
}

.accordion-button:hover {
  color: #7000f0;
}

@media (max-width: 768px) {
  .accordion-button,
  .accordion-body {
    font-size: 17px;
  }
}
</style>
