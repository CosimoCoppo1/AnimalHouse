<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">Come possiamo aiutarti?</p>
        <h1 class="big-text">Assistenza clienti</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/contacts/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          <b>Vieni a trovarci!</b><br />Non vediamo l'ora di <b>conoscerti</b> e
          mostrarti tutte le soprese e le opportunità che riserviamo ai nostri
          clienti.
        </p>
      </div>
    </div>

    <!--description section -->
    <div class="grid">
      <div class="col">
        <p class="description__text">
          Animal House è una nuova ma importante realtà nel settore
          <b>Pet care</b>: conta di
          <b>{{ this.locations.length }} sedi</b> sparse per il territorio
          italiano, e offre una varietà di servizi per il benessere completo dei
          tuoi animali domestici.<br />
          Sotto trovi le modalità con cui entrare in <b>contatto</b> con i
          nostri operatori.
        </p>
      </div>
    </div>

    <!-- card section -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 actions mb-5">
      <div v-for="(action, index) in this.actions" :key="index" class="col">
        <div class="card-container mx-auto mt-5">
          <div class="card">
            <div class="card__image">
              <img
                :src="require(`@/assets/contacts/${action.img}`)"
                alt=".."
                :style="{
                  'background-color': this.changeColor(`${index}`),
                }"
              />
            </div>
            <div class="card__body">
              <h5>{{ action.type }}</h5>
              <p v-html="action.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <p class="description__text">
          Non perdere i <b>benefici</b> dell'essere un membro della comunità
          Animal House!<br />Con un click passa alla sezione
          <a href="http://localhost:8000/frontoffice/">
            <button class="btn btn-warning border" type="button">VIP</button>
          </a>
          e siamo <b>sicuri</b> che rimarrai soddisfatto della scelta!
        </p>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="description__title big-text">Dove trovarci</h3>
        <p class="description__text">
          Clicca l'icona relativa alla sede per conoscere i servizi specifici
          offerti in ogni punto vendita Animal House.<br />Per conoscere le date
          disponibili, i prezzi e prenotare subito un appuntamento, contattaci
          secondo le modalità sopra indicate o passa alla sezione servizi
          nell'applicazione tramite questo
          <a href="http://localhost:8000/frontoffice/services" class="link"
            >link</a
          >.
        </p>
      </div>
    </div>

    <!-- accordion section -->
    <div class="accordion container" id="accordionExample">
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
          <div
            class="accordion-body"
            v-for="(service, index) in this.servicesLocation"
            :key="index"
          >
            Potrai effettuare presso la sede il servizio di
            <b class="text-warning">{{ service.service.name }}</b> per
            <b class="text-warning">{{ service.pet.name }}</b
            >.
          </div>
        </div>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="description__title big-text">Domande più frequenti</h3>
        <p class="description__text mb-4">
          Una raccolta di domande e risposte che possono aiutarti ad avere una
          serena navigazione sul sito.
        </p>
      </div>
    </div>

    <!-- faqs section -->
    <div class="container">
      <div
        class="faqs__container"
        v-for="(faq, index) in this.faqs"
        :key="index"
      >
        <div class="faqs__question">{{ faq.question }}</div>
        <div class="faqs__answer">{{ faq.answer }}</div>
      </div>
    </div>
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
            "Per una risposta IMMEDIATA chiama al numero di ufficio 3295817284, dal Lunedì al Venerdì dalle 9:00 alle 17:00.",
          img: "icon1.png",
        },
        {
          type: "Scrivi",
          description:
            'Scrivi al nostro contatto email "assistenza@animalhouse.it" e ti risponderemo ENTRO 24h dalla richiesta.',
          img: "icon2.png",
        },
        {
          type: "Chatta",
          description:
            "Vuoi entrare in contatto con i membri della <a href='http://localhost:8000/frontoffice/community' style='color: #e0acd5'>community</a> Animal House? Accedi all'area VIP per usufruire del servizio.",
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
          question: "I prezzi presenti sul sito internet sono compresi di IVA?",
          answer: "Sì, tutti i prezzi includono l'IVA.",
        },
        {
          question: "In quando tempo un ordine viene spedito?",
          answer:
            "Facciamo del nostro meglio per spedire gli articoli il più velocemente possibile. Avremo bisogno dai 3 ai 6 giorni di tempo di produzione per la spedizione dell'ordine; i tempi di spedizione medi sono di 4-8 giorni.",
        },
        {
          question: "Animal House spedisce all'estero?",
          answer:
            "No. La vendita e la consegna della merce sono limitate allo Stato Italiano.",
        },
        {
          question:
            "Come posso fare in caso di problemi di navigazione e/o problemi di visualizzazione sul sito?",
          answer:
            "Puoi segnalarcelo immediatamente utilizzando il form di contatto o inviandoci una email all'indirizzo assistenza@animalhouse.it",
        },
        {
          question:
            "Chi posso contattare in caso di problemi nella fase di acquisto e/o problemi tecnici?",
          answer:
            "Puoi contattarci via email o chiamandoci da Lunedì al Venerdì dalle 9:00 alle 17:00.",
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
            "Siamo qui per aiutarti! Invia un email a assistenza@animalhouse.it e saremo felici di assisterti in ogni modo possibile.",
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
  background-color: #460aa7;
  color: #fff;
  border: 1px solid black;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content p {
  color: #460aa7;
}

/* description section */
.description__title {
  color: #460aa7;
}

/* faqs section */
.faqs__container {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 30px;
  text-align: left;
  padding: 5px 15px;
}

.faqs__question {
  font-weight: bold;
  font-size: 20px;
  color: #460aa7;
}

.faqs__answer {
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

.card__body h5 {
  text-align: center;
  margin: 15px auto;
  font-weight: 900;
  font-size: 25px;
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
  color: #460aa7;
}

.accordion-button,
.accordion-body {
  font-size: 22px;
}

.accordion-button:hover {
  color: #460aa7;
}

@media (max-width: 768px) {
  .accordion-button,
  .accordion-body {
    font-size: 17px;
  }
}
</style>
