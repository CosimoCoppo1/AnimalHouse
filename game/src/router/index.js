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
  {
    path: "/giochi",
    name: "Giochi",
    component: () =>
      import(/* webpackChunkName: "giochi" */ "../views/GamesView.vue"),
  },
  {
    path: "/dati-personali",
    name: "Dati personali",
    component: () =>
      import(/* webpackChunkName: "dati-personali" */ "../views/AdminView.vue"),
  },
  {
    path: "/chi-siamo",
    name: "Chi siamo",
    component: () =>
      import(/* webpackChunkName: "chi-siamo" */ "../views/AboutView.vue"),
  },
  {
    path: "/contatti",
    name: "Contatti",
    component: () =>
      import(/* webpackChunkName: "contatti" */ "../views/ContactsView.vue"),
  },
  {
    path: "/giochi/feed",
    name: "feed",
    component: () =>
      import(/* webpackChunkName: "feed" */ "../views/FeedView.vue"),
  },
  {
    path: "/giochi/puzzle",
    name: "puzzle",
    component: () =>
      import(/* webpackChunkName: "puzzle" */ "../views/PuzzleView.vue"),
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
    name: "scarabeo",
    component: () =>
      import(/* webpackChunkName: "scarabeo" */ "../views/ScrabbleView.vue"),
  },
  {
    path: "/giochi/peek",
    name: "peek",
    component: () =>
      import(/* webpackChunkName: "lab" */ "../views/PeekView.vue"),
  },
  {
    path: "/giochi/quiz",
    name: "quiz",
    component: () =>
      import(/* webpackChunkName: "quiz" */ "../views/QuizView.vue"),
  },
  {
    path: "/giochi/informazioni-curiose",
    name: "Informazioni curiose",
    component: () =>
      import(/* webpackChunkName: "curiosità" */ "../views/CuriosityView.vue"),
  },
  {
    path: "/prova",
    name: "prova",
    component: () =>
      import(
        /* webpackChunkName: "prova" */ "../components/SignInUpComponent.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory("/game/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
