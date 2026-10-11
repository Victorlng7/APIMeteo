import { EnvoieValeurs, ValeursRecu } from "./type";
export class Meteo {
    private _form: EnvoieValeurs;
    private _section: ValeursRecu;
    private _apiKey = "99af9ff95768bca1ea7321ba1400a872";

    init(form: EnvoieValeurs, section: ValeursRecu) {
        this._form = form;
        this._section = section;

        this._form.btnRechercher.onclick = () =>
            this.rechercherVille(this._form.envoiValeur.value);
    }

    async rechercherVille(ville: string) {
        const requeteAPI: string = `http://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=1&appid=${this._apiKey}`;

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

        this.chercherMeteo(lat, lon);
    }

    async chercherMeteo(lat: string, lon: string) {
        const requeteAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this._apiKey}&units=metric&lang=fr`;

        let retourApi;

        try {
            const reponse = await fetch(requeteAPI);
            const data = await reponse.json();

            retourApi = data;

            console.log(data);
        } catch (error) {
            console.log("Erreur : ", error);
        }

        this.replirSections(retourApi);
    }

    replirSections(retourApi: any) {
        if (retourApi) {
            //mise des valeurs dans des variables :
            const mainMeteo = retourApi.weather[0].main;
            const descMeteo = retourApi.weather[0].description;
            const temp = retourApi.main.temp;
            const vitesseVent = retourApi.wind.speed;
            const humidite = retourApi.main.humidity;

            console.log(mainMeteo, descMeteo, temp, vitesseVent, humidite);

            //mise des valeurs dnas les input HTML

            this._section.meteoDesc.value = descMeteo;
            this._section.meteoHumi.value = humidite;
            this._section.meteoMain.value = mainMeteo;
            this._section.meteoTemp.value = temp;
            this._section.meteoVent.value = vitesseVent;
            this._section.meteoVille.value = this._form.envoiValeur.value;
        } else {
            console.error("Retour API vide");
        }
    }
}
