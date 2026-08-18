import { meteoType } from "./type";

export class Meteo {
    private _form: meteoType;
    private _apiKey = "99af9ff95768bca1ea7321ba1400a872";

    init(form: meteoType) {
        this._form = form;

        this._form.btnRechercher.onclick = () =>
            this.rechercherVille(this._form.envoiValeur.value);
    }

    async rechercherVille(ville: string) {
        const requeteAPI: string = `http://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=1&appid=${this._apiKey}`;

        try {
            const reponse = await fetch(requeteAPI);
            const data = await reponse.json();

            console.log(data);
        } catch (error) {
            console.log("Pas de réponse", error);
        }
    }
}
