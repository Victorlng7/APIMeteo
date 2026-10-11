<script setup lang="ts">
import { ref } from "vue";
import affichageValeur from "./composants/affichageValeur.vue";
import inputVille from "./composants/inputVille.vue";

const apiKey = "99af9ff95768bca1ea7321ba1400a872";
const infoAffichage = ref<{
    mainMeteo: string;
    descMeteo: string;
    temp: number;
    vitesseVent: number;
    humidity: number;
} | null>(null);

async function rechercherVille(ville: string) {
    console.log("ville recherché : ", ville);

    const requeteAPI: string = `http://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=1&appid=${apiKey}`;

    let retourApi;

    try {
        const reponse = await fetch(requeteAPI);
        const data = await reponse.json();

        console.log(data);
        console.log(data[0]);

        if (Number(data.length) !== 1) {
            alert("La ville recherchée n'existe pas");
        } else {
            retourApi = data[0];
        }
    } catch (error) {
        console.log("Erreur : ", error);
    }

    const lat = retourApi.lat;
    const lon = retourApi.lon;

    chercherMeteo(lat, lon);
}

async function chercherMeteo(lat: string, lon: string) {
    const requeteAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`;

    let retourApi;

    try {
        const reponse = await fetch(requeteAPI);
        const data = await reponse.json();

        retourApi = data;
    } catch (error) {
        console.log("Erreur : ", error);
    }

    creeObjet(retourApi);
}
function creeObjet(retourApi: any) {
    if (retourApi) {
        //mise des valeurs dans des variables :
        infoAffichage.value = {
            mainMeteo: retourApi.weather[0].main,
            descMeteo: retourApi.weather[0].description,
            temp: retourApi.main.temp,
            vitesseVent: retourApi.wind.speed,
            humidity: retourApi.main.humidity,
        };
    } else {
        console.error("Retour API vide");
    }
}
</script>

<template>
    <main>
        <h1>Météo</h1>
        <inputVille @ville="(ville) => rechercherVille(ville)" />

        <affichageValeur :info-affichage="infoAffichage" />
    </main>
</template>

<style scoped></style>
