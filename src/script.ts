import { Meteo } from "./classMeteo";

const meteo = new Meteo();

meteo.init(
    {
        envoiValeur: document.getElementById("envoiValeur") as HTMLInputElement,
        btnRechercher: document.getElementById(
            "btnRechercher",
        ) as HTMLInputElement,
    },
    {
        meteoVille: document.getElementById("meteo-ville") as HTMLInputElement,
        meteoTemp: document.getElementById("meteo-temp") as HTMLInputElement,
        meteoMain: document.getElementById("meteo-main") as HTMLInputElement,
        meteoDesc: document.getElementById("meteo-desc") as HTMLInputElement,
        meteoVent: document.getElementById("meteo-vent") as HTMLInputElement,
        meteoHumi: document.getElementById("meteo-humi") as HTMLInputElement,
    },
);
