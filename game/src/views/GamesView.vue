<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">pronto a vincere?</h1>
        <h2 class="big-text">
          Sezione giochi <span lang="en" xml:lang="en">Animal House</span>
        </h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/games/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          <em>Pensavi</em> di aver già visto tutto dal sito
          <span lang="en" xml:lang="en">Animal House</span>? Invece <b>no!</b
          ><br />
          Benvenuto nella <em>sezione giochi</em>, pensata appositamente per
          voi, i nostri curiosi e amabili clienti. Dopo un acquisto al nostro
          <router-link
            :to="{ path: '/negozio' }"
            class="btn btn-warning"
            role="button"
            >negozio</router-link
          >
          e una consulenza dai nostri
          <router-link
            :to="{ path: '/servizi' }"
            class="btn btn-warning"
            role="button"
            >servizi</router-link
          >, divertiti nelle sezioni elencate in questa pagina.<br />Siamo
          sicuri che <em>non te ne pentirai</em>!
        </p>
      </div>
    </section>

    <!-- description section -->
    <section class="paragraph grid">
      <div class="col">
        Sapevi che è possibile giocare e <em>salvare</em> i propri punteggi?<br />
        Per vedere la <b><em>classifica generale</em></b> dei membri di
        <span lang="en" xml:lang="en">Animal House</span> alla sezione
        <a
          :href="`${this.$globalVar}/frontoffice/community`"
          style="color: #830094"
          lang="en"
          xml:lang="en"
          >community</a
        >!
      </div>
    </section>

    <!-- gallery section -->
    <main class="container">
      <div class="row">
        <ol
          class="col-md-6 my-4"
          align="center"
          v-for="(game, index) in this.games"
          :key="index"
        >
          <div class="image__container">
            <img
              :src="require(`@/assets/games/${game.img}`)"
              class="image"
              :alt="game.alt"
            />
            <router-link
              role="button"
              class="btn btn-warning game-title"
              :to="{ path: `${game.link}` }"
              >{{ game.direct }}</router-link
            >
          </div>
          <li>
            <h3 class="description__text px-2">
              <b>{{ game.description }}</b>
            </h3>
          </li>
        </ol>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "GamesView",
  data() {
    return {
      myVar: this.$globalVar,
      games: [
        {
          img: "gallery2.png",
          link: "/giochi/memory",
          direct: "memory",
          alt: "Una coppia di uccellini si baciano sopra un ramo",
          description: "Aiuta le coppie a ricongiungersi!",
        },
        {
          img: "gallery3.png",
          link: "/giochi/quiz",
          direct: "quiz",
          alt: "Un cane felice con occhiali da intelettuale sul muso",
          description: "Sei acculturato nel campo animale?",
        },
        {
          img: "gallery4.png",
          link: "/giochi/morra-cinese",
          direct: "morra cinese",
          alt: "La statuetta di un elefantino",
          description: "Sasso, Carta, Forbice.... Ah, no?",
        },
        {
          img: "gallery5.png",
          link: "/giochi/scarabeo",
          direct: "scarabeo",
          alt: "Un gruppo di fenicotteri rosa bevono in uno stagno nel loro habitat naturale",
          description: "Indovina l'animale da habitat e alimentazione!",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* helpers */
.btn {
  background-color: #830094;
  color: #fff;
  border: 1px solid #000;
}

.grid {
  font-size: 20px;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #830094;
}

/* gallery section */
.image {
  border-radius: 20px;
}

.image__container .btn:hover {
  background-color: #830094;
}

li {
  list-style-type: none;
}

@media (max-width: 768px) {
  .game-title {
    font-size: 14px;
  }
}
</style>
