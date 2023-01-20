<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">parlano di noi</p>
        <h1 class="big-text">La storia dietro Animal House</h1>
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
          <b>Animal House</b> è una realtà piccola ma dinamica specializzata nel
          campo del Pet care. Siamo guidato da due elementi: passione per il
          nostro lavoro e la volontà di mettere i clienti al centro, animali e
          padroni. E ci impegniamo, giorno dopo giorno, per offrirti tutto
          questo (e molto altro) a portata di click.<br />Se stai cercando
          qualcosa di nuovo, sei nel <b>posto giusto</b>.
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
          tutti i gusti e per tutte le occasioni. Lavoriamo a stretto contatto
          con tutti i fornitori per garantire la migliore qualità presente sul
          mercato e offrirti la crème de la crèeme.<br />Crediamo
          nell'importanza della qualità e non solo quando di parla di prodotti,
          ma anche quando si parla di assistenza ai nostri clienti!
        </p>
      </div>
    </div>

    <!-- client section -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6" align="right">
          <div class="image__container">
            <img
              src="../assets/services/gallery1.png"
              alt="..."
              class="image"
            />
            <router-link type="button" class="btn" :to="{ path: '/negozio' }"
              >negozio</router-link
            >
          </div>
        </div>
        <div class="col-md-6" align="left">
          <div class="image__container">
            <img
              src="../assets/services/gallery2.png"
              alt="..."
              class="image"
            />
            <router-link type="button" class="btn" :to="{ path: '/servizi' }"
              >servizi</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="col">
        <p class="description__text">
          Vuoi accedere al negozio per ottenere tutte le informazioni sui nostri
          prodotti e <b>comprare</b> o prenotare una <b>visita immediata</b> per
          il tuo amico animale? Passa all'area
          <a href="#" class="link">VIP</a> di Animal House, ottenendo questo e
          molto altro.
        </p>
      </div>
    </div>

    <!-- description section -->
    <div class="grid">
      <div class="col">
        <h3 class="description__title big-text">Come nasce Animal House?</h3>
        <p class="description__text">
          Qui potrai trovare i <b>migliori</b> prodotti per i tuoi animali, per
          tutti i gusti e per tutte le occasioni. Lavoriamo a stretto contatto
          con tutti i fornitori per garantire la migliore qualità presente sul
          mercato e offrirti la crème de la crème.<br />Crediamo nell'importanza
          della qualità e non solo quando di parla di prodotti, ma anche quando
          si parla di assistenza ai nostri clienti!
        </p>
      </div>
    </div>
    <TimelineComponent />
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

<!--
partiti da una birra tra amici e ora siamo qui
-->

<script>
import TimelineComponent from "../components/TimelineComponent.vue";

export default {
  name: "AboutView",
  components: { TimelineComponent },
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
  color: #ffa806;
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

/* poster section */
.poster {
  display: flex;
  height: 80vh;
  width: 100%;
  align-items: center;
  margin-bottom: 80px;
}

.poster__img {
  width: 55%;
  height: 100%;
}

.poster__img video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.poster__content {
  width: 45%;
  padding: 20px;
  text-align: left;
  font-size: 20px;
}

.poster__content h3 {
  color: #ffa806;
  font-weight: bold;
  font-size: 40px;
}

@media (max-width: 768px) {
  .poster {
    flex-wrap: wrap;
    height: auto;
  }

  .poster__content {
    text-align: justify;
  }

  .poster__img,
  .poster__content {
    width: 100%;
  }
}

/* description section */
.description__title {
  color: #ffa806;
  text-align: center;
  margin-top: 30px;
}

.description__text {
  font-size: 22px;
  text-align: center;
}

.link {
  color: #ffa806;
}

@media (max-width: 768px) {
  .description__text {
    font-size: 17px;
    text-align: justify;
  }
}

/* client section */
.image__container {
  position: relative;
}

.image {
  display: block;
  width: 70%;
  height: 70%;
  margin-bottom: 20px;
  border-radius: 20px;
}

.image__container .btn {
  position: absolute;
  cursor: pointer;
  border-radius: 5px;
  background-color: #0000008c;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}

.image__container .btn:hover {
  background-color: #ffa806;
}
</style>
