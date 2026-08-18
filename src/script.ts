import { Meteo } from "./classMeteo";

const meteo = new Meteo();

meteo.init({
    envoiValeur: document.getElementById("envoiValeur") as HTMLInputElement,
    btnRechercher: document.getElementById("btnRechercher") as HTMLInputElement,
    retourMeteo: document.getElementById("retourMeteo") as HTMLInputElement,
});
