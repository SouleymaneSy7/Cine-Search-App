<template>
  <main class="main-container container">
    <form class="main__form" @submit.prevent="getMovies()">
      <label class="input__group" for="input">
        <input
          type="search"
          name="input"
          id="input"
          class="form--input"
          placeholder="Rechercher un film..."
          v-model="movieQuery"
        />

        <i class="fa-solid fa-magnifying-glass | input__icon"></i>
      </label>

      <button type="submit" class="form--btn" @click="getMovies()">
        Rechercher
      </button>
    </form>

    <section class="card__container" v-if="allMovies.length">
      <article class="movie-card" v-for="movie in allMovies" :key="movie.id">
        <RouterLink :to="'/movie/' + movie.id">
          <img
            :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            :alt="movie.title + ' Poster'"
          />
        </RouterLink>
      </article>
    </section>
    <p v-else-if="errors" class="errors">Oups! Page Non Trouvée</p>
    <p class="tips" v-else>Trouver un film</p>
  </main>
</template>

<script setup>
// Imports
import { ref } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

// Variables
let allMovies = ref([]);
const movieQuery = ref("");
const TOKEN_KEY = import.meta.env.VITE_MOVIE_ACCESS_TOKEN;
const errors = ref(false);

// Functions
const getMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: movieQuery.value,
      include_adult: "false",
      language: "fr-FR",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TOKEN_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      allMovies.value = response.data.results;
    })
    .catch((error) => {
      console.error(error);
      errors.value = true;
    });
};
</script>
