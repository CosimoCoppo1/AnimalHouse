import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/feed",
    name: "feed",
    component: () =>
      import(/* webpackChunkName: "feed" */ "../views/FeedView.vue"),
  },
  {
    path: "/puzzle",
    name: "puzzle",
    component: () =>
      import(/* webpackChunkName: "puzzle" */ "../views/PuzzleView.vue"),
  },
  {
    path: "/rockpaperscissor",
    name: "rockpaperscissor",
    component: () =>
      import(
        /* webpackChunkName: "rockpaperscissor" */ "../views/RockPaperScissorView.vue"
      ),
  },
  {
    path: "/scramble",
    name: "scramble",
    component: () =>
      import(/* webpackChunkName: "scrumble" */ "../views/ScrambleView.vue"),
  },
  {
    path: "/peek",
    name: "peek",
    component: () =>
      import(/* webpackChunkName: "lab" */ "../views/PeekView.vue"),
  },
  {
    path: "/quiz",
    name: "quiz",
    component: () =>
      import(/* webpackChunkName: "quiz" */ "../views/QuizView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
