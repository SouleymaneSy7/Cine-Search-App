<template>
  <section class="container">
    <RouterLink class="return--btn" to="/">
      <i class="fa-solid fa-arrow-left"></i>
      <span>Back</span>
    </RouterLink>

    <header class="movie__header">
      <div class="poster">
        <img
          :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
          :alt="movie.title + ' Poster'"
          class="poster__img"
        />
      </div>
    </header>

    <main class="movie__main">
      <section class="movie__details">
        <h1 class="movie__title">{{ movie.title }}</h1>

        <div class="movie__flex">
          <p class="text">
            Durée: <span class="base__font">{{ movie.runtime }}min</span>
          </p>

          <ul>
            <li class="text">
              Type:
              <span
                class="base__font"
                v-for="genre of movie.genres"
                :key="genre.id"
              >
                {{ genre.name }} -
              </span>
            </li>
          </ul>

          <p class="text">
            Date De Sortie:
            <span class="base__font">{{ movie.release_date }}</span>
          </p>

          <p class="text">
            Note: <span class="base__font"> {{ movie.vote_average }} </span>
          </p>

          <p class="text">
            Slogan: <span class="base__font"> {{ movie.tagline }} </span>
          </p>

          <p class="text">
            Langue:
            <span
              class="base__font"
              v-for="lang in movie.spoken_languages"
              :key="lang.id"
            >
              {{ lang.name }}
            </span>
          </p>

          <p class="text">
            Revenue:
            <span class="base__font"> {{ movie.revenue }}$ </span>
          </p>
        </div>
      </section>

      <p class="main__text">{{ movie.overview }}</p>
    </main>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, RouterLink } from "vue-router";
import axios from "axios";

const movie = ref({});
const route = useRoute();
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

onBeforeMount(async () => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}&language=fr-FR`
    )
    .then(function (response) {
      movie.value = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
