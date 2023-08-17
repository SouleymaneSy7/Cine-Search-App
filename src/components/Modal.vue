<template>
  <Teleport to="body">
    <section v-show="activeModal" class="modal-container">
      <article v-if="activeModal" class="modal">
        <button type="button" class="modal--btn" @click="$emit('close')">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <p class="modal__text">
          Bienvenue sur notre site web de recherche de films et de séries ! Que
          vous soyez un amateur de cinéma ou un fan de séries télévisées, notre
          plateforme est conçue pour vous aider à trouver facilement les films
          et les séries que vous souhaitez regarder. Voici un guide rapide pour
          vous aider à utiliser notre site :
        </p>

        <ul>
          <li>
            <span class="modal__title"
              >1. Recherche de films et de séries :</span
            >

            <p class="modal__text">
              - Sur la page d'accueil, vous trouverez une barre de recherche.
              Entrez le titre du film ou de la série que vous recherchez, puis
              appuyez sur "Rechercher".
            </p>
          </li>

          <li>
            <span class="modal__title">2. Résultats de la recherche :</span>

            <p class="modal__text">
              - Une fois que vous avez effectué votre recherche, vous verrez une
              liste de résultats correspondant à vos critères. - Chaque résultat
              affiche l'image du film. Cliquez sur le résultat qui vous
              intéresse pour obtenir des informations plus détaillées.
            </p>
          </li>

          <li>
            <span class="modal__title">3. Pages de détails :</span>

            <p class="modal__text">
              - Sur la page de détails, vous trouverez des informations sur le
              film ou la série sélectionné(e). - Vous y trouverez le synopsis,
              la durée,la date de sortie, la note moyennes des utilisateurs, les
              revenus du film et d'autres détails pertinents.
            </p>
          </li>
        </ul>
      </article>
    </section>
  </Teleport>
</template>

<script setup>
defineEmits(["close"]);
defineProps({
  activeModal: {
    type: Boolean,
    default: false,
  },
});
</script>
