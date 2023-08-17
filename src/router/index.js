import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MovieDetails from "@/views/MovieDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Movie/:id",
      name: "MovieDetails",
      component: MovieDetails,
    },
  ],
});

export default router;
