import { Meteo } from "./classMeteo.js";
const meteo = new Meteo();
meteo.init({
    envoiValeur: document.getElementById("envoiValeur"),
    btnRechercher: document.getElementById("btnRechercher"),
}, {
    meteoVille: document.getElementById("meteo-ville"),
    meteoTemp: document.getElementById("meteo-temp"),
    meteoMain: document.getElementById("meteo-main"),
    meteoDesc: document.getElementById("meteo-desc"),
    meteoVent: document.getElementById("meteo-vent"),
    meteoHumi: document.getElementById("meteo-humi"),
});
//# sourceMappingURL=script.js.map