<template>
  <div class="container-fluid" style="margin-top: 80px">
    <ul class="timeline" v-for="(step, index) in this.steps" :key="index">
      <li
        class="timeline__list"
        :class="index % 2 != 0 ? 'timeline__inverted' : ''"
      >
        <div class="timeline__image">
          <img
            class="rounded-circle"
            style="width: 100%; height: 100%"
            :src="require(`@/assets/about/${step.img}`)"
            :alt="step.alt"
          />
        </div>
        <div class="timeline__panel">
          <div class="timeline__content">
            <h4 class="date">{{ step.year }}</h4>
            <h4 class="subheading">{{ step.intro }}</h4>
          </div>
          <div class="timeline__body">
            <p class="text-muted">{{ step.description }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <a href="#">
        <button class="btn btn-danger" type="button">
          Unisciti alla squadra!
        </button>
      </a>
      <p class="mt-2 comment">
        Diventa <b>membro</b> della comunità Animal House!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineComponent",
  data() {
    return {
      steps: [
        {
          img: "story1.jpg",
          alt: "..",
          year: "2020",
          intro: "Una birra tra amici",
          description:
            "Quando ci vediamo per una birra? L'appuntamento veniva sempre rimandato, anche per le innumerevoli visite dal veterinaro e al pet store. Ci siamo chiesti: perchè non riunire in una unica struttura tutto ciò che interessa il benessere dei nostri amici animali?",
        },
        {
          img: "story2.jpg",
          alt: "..",
          year: "2022",
          intro: "Il progetto",
          description:
            "L'idea imprenditoriale iniziale, diventata poi la nostra missione, aveva qualcosa di rivoluzionario: fornire servizi e prodotti di alta qualità che permettessero d'intensificare il legame di fiducia e amore tra pet parent e pet.",
        },
        {
          img: "story3.jpg",
          alt: "..",
          year: "2023",
          intro: "Il sogno che si avvera",
          description:
            "Diffondiamo la passione e l'amore per la cura degli animali, stando dalla parte di chi ama i propri pet. Contiamo diverse sedi in Italia e siamo incoraggiati a crescere ancora, diffondendo consapevolezza e curiosità a tutte le generazioni.",
        },
      ],
    };
  },
};
</script>

<style>
/* timeline section */
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}

.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  margin-left: -1.5px;
  content: "";
  background-color: #e9ecef;
}

.timeline__list {
  position: relative;
  min-height: 100px;
  margin-bottom: 100px;
}

.timeline__list:after,
.timeline__list:before {
  display: table;
  content: " ";
}

.timeline__list:after {
  clear: both;
}

.timeline__panel {
  position: relative;
  float: left;
  width: 41%;
  padding: 0 20px 20px 30px;
  text-align: right;
}

.timeline__panel:before,
.timeline__panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}

.timeline__image {
  position: absolute;
  z-index: 100;
  left: 50%;
  top: -10%;
  width: 100px;
  height: 100px;
  margin-left: -50px;
  text-align: center;
  color: #fff;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #f84444;
}

.timeline__inverted > .timeline__panel {
  float: right;
  padding: 0 30px 20px 20px;
  text-align: left;
}

.timeline__inverted > .timeline__panel:before,
.timeline__inverted > .timeline__panel:after {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}

.timeline__list:last-child {
  margin-bottom: 0;
}

.timeline__content h4 {
  margin-top: 0;
  font-size: 22px;
}

.date {
  color: #f84444;
  font-weight: italic;
}

.subheading {
  font-weight: bold;
}
.timeline__body p {
  margin-bottom: 0;
}

.comment {
  font-size: 22px;
}

@media (max-width: 768px) {
  .timeline__inverted > .timeline__panel {
    text-align: right;
  }

  .timeline__panel {
    text-align: left;
  }

  .comment {
    font-size: 17px;
  }
}
</style>
