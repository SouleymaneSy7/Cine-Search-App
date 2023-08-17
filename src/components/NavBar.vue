<template>
  <header class="header-container">
    <nav class="navbar container">
      <RouterLink to="/" class="navbar__logo">
        <img src="../assets/Logo.svg" alt="Website Logo" />
      </RouterLink>

      <button type="button" class="navbar--btn" @click="toggleModal">
        <i class="fa-solid fa-circle-info"></i>
      </button>

      <Modal :active-modal="activeModal" @close="toggleModal" />
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Modal from "./Modal.vue";

const activeModal = ref(false);

const toggleModal = () => {
  activeModal.value = !activeModal.value;
};
</script>
