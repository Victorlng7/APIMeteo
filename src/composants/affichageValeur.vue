<script setup lang="ts">
defineProps<{
    infoAffichage: {
        mainMeteo: string;
        descMeteo: string;
        temp: number;
        vitesseVent: number;
        humidity: number;
    } | null;
}>();
</script>

<template>
    <section v-if="infoAffichage" id="output" aria-live="polite">
        <h3>{{ infoAffichage.mainMeteo }}</h3>
        <div>
            <label for="descriptionMeteo">Description</label>
            <input
                id="descriptionMeteo"
                type="text"
                :value="infoAffichage.descMeteo"
                readonly
            />
        </div>
        <div>
            <label for="temperature">Température</label>
            <input
                id="temperature"
                type="text"
                :value="infoAffichage.temp + ' °C'"
                readonly
            />
        </div>
        <div>
            <label for="vent">Vent</label>
            <input
                id="vent"
                type="text"
                :value="infoAffichage.vitesseVent + ' m/s'"
                readonly
            />
        </div>
        <div>
            <label for="humidite">Humidité</label>
            <input
                id="humidite"
                type="text"
                :value="infoAffichage.humidity + ' %'"
                readonly
            />
        </div>
    </section>
</template>

<style scoped></style>
