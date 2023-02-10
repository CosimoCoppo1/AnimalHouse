import { createRouter, createWebHistory } from "vue-router";

/** file importati dinamicamente tramite Webpack
 * che implementa la tecnica code-splitting
 */
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/chi-siamo",
    name: "Chi siamo",
    component: () =>
      import(/* webpackChunkName: "chi-siamo" */ "../views/AboutView.vue"),
  },
  {
    path: "/dati-personali",
    name: "Dati personali",
    component: () =>
      import(/* webpackChunkName: "dati-personali" */ "../views/AdminView.vue"),
  },
  {
    path: "/contatti",
    name: "Contatti",
    component: () =>
      import(/* webpackChunkName: "contatti" */ "../views/ContactsView.vue"),
  },
  {
    path: "/informazioni-curiose",
    name: "Informazioni curiose",
    component: () =>
      import(/* webpackChunkName: "curiosità" */ "../views/CuriosityView.vue"),
  },
  {
    path: "/giochi",
    name: "Giochi",
    component: () =>
      import(/* webpackChunkName: "giochi" */ "../views/GamesView.vue"),
  },
  {
    path: "/giochi/memory",
    name: "Memory",
    component: () =>
      import(/* webpackChunkName: "memory" */ "../views/MemoryView.vue"),
  },
  {
    path: "/giochi/quiz",
    name: "Quiz",
    component: () =>
      import(/* webpackChunkName: "quiz" */ "../views/QuizView.vue"),
  },
  {
    path: "/giochi/morra-cinese",
    name: "Morra cinese",
    component: () =>
      import(
        /* webpackChunkName: "morra-cinese" */ "../views/RockPaperScissorView.vue"
      ),
  },
  {
    path: "/giochi/scarabeo",
    name: "Scarabeo",
    component: () =>
      import(/* webpackChunkName: "scarabeo" */ "../views/ScrabbleView.vue"),
  },
  {
    path: "/servizi",
    name: "Servizi",
    component: () =>
      import(/* webpackChunkName: "servizi" */ "../views/ServicesView.vue"),
  },
  {
    path: "/negozio",
    name: "Negozio",
    component: () =>
      import(/* webpackChunkName: "negozio" */ "../views/ShopView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/game/"),
  routes,
  /** permette il reindirizzamento nella posizione
   * giusta nelle pagine di navigazione
   */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
