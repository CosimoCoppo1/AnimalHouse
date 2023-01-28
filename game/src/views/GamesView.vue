<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">pronto a vincere?</p>
        <h1 class="big-text">Sezione giochi Animal House</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/games/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          Pensavi di aver già visto tutto dal sito Animal House? Invece
          <b>no!</b><br />
          Benvenuto nella sezione giochi, pensata appositamente per voi, i
          nostri curiosi e amabili clienti. Dopo un acquisto al nostro
          <router-link :to="{ path: '/negozio' }" class="link"
            >negozio</router-link
          >
          e una consulenza dai nostri
          <router-link :to="{ path: '/servizi' }" class="link"
            >servizi</router-link
          >, divertiti nelle sezioni elencate in questa pagina.<br />Siamo
          sicuri che non te ne pentirai!
        </p>
      </div>
    </div>

    <!-- image-gallery section -->
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 my-4"
          align="center"
          v-for="(game, index) in this.games"
          :key="index"
        >
          <div class="image__container">
            <img
              :src="require(`@/assets/games/${game.img}`)"
              class="image"
              alt=".."
            />
            <router-link
              type="button"
              class="btn"
              :to="{ path: `${game.link}` }"
              >{{ game.direct }}</router-link
            >
          </div>
          <p class="description__text px-2">
            <i>{{ game.description }}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesView",
  data() {
    return {
      games: [
        {
          img: "gallery2.png",
          link: "/giochi/memory",
          direct: "memory",
          description:
            "Aiuta le coppie a ritrovarsi! Cerca di farlo nel minor numero di mosse possibile!",
        },
        {
          img: "gallery3.png",
          link: "/giochi/quiz",
          direct: "quiz",
          description:
            "Sei una persona acculturata sul campo animale? Testa le tue capacità tramite il quiz di Animal House!",
        },
        {
          img: "gallery4.png",
          link: "/giochi/morra-cinese",
          direct: "morra cinese",
          description:
            "Sasso, Carta, Forbice.... Ah, no? Rifacciamo: Elefante, Gatto, Topo!",
        },
        {
          img: "gallery5.png",
          link: "/giochi/scarabeo",
          direct: "scarabeo",
          description:
            "Indovina l'animale dall'habitat e dall'alimentazione partendo da questo simpatico gioco scarabeo!",
        },
      ],
    };
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #e100ff;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content p {
  color: #e100ff;
}

/* image-gallery section */
.image {
  border-radius: 20px;
}

.image__container .btn:hover {
  background-color: #e100ff;
}
</style>
