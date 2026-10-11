<script setup lang="ts">
import { ref } from "vue";

const ville = ref("");
const emit = defineEmits(["ville"]);

function sendValue() {
    emit("ville", ville.value);
}
</script>

<template>
    <section id="Input">
        <h3>Rechercher une ville</h3>
        <input
            id="envoiValeur"
            type="text"
            v-model="ville"
            placeholder="Entrez le nom de la ville"
        />

        <button id="btnRechercher" @click="sendValue">Chercher Ville</button>
    </section>
</template>

<style scoped></style>
