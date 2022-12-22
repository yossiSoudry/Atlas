import { countriesObj } from "./countries.js";
import { initMap } from "./map.js";
import { clickButtons } from "./app.js";

export default class Country {
  constructor(_parent, _item1, _item2) {
    this.parent = _parent;
    this.name = _item1.name.common;
    this.originalName = _item1.name.official;
    this.location = _item1.latlng;
    this.flag = _item1.flags.png;
    this.arms = _item1.coatOfArms.png;
    this.code = _item1.cioc;
    this.country_code = _item1.currencies;
    this.area = _item1.area.toLocaleString();
    this.coin = Object.keys(_item1.currencies)[0];
    this.symbol = _item1.currencies[this.coin].symbol;
    this.population = _item1.population.toLocaleString();
    this.capital = _item1.capital;
    this.borders = _item1.borders;
    this.contries = countriesObj;
    this.shem = _item2.שם_מדינה_במאגר;
    this.shemRishmi = _item2.שם_מדינה_רשמי;
    this.yabeshet = _item2.יבשת;
    this.bira = _item2.שם_עיר_בירה;
    this.status = _item2.סטטוס_יחסים.split(" ");
    this.status2 = this.status[0];
    this.shagrir = _item2.סוג_ייצוג_מדינה;
    this.year = _item2.תאריך_כינון_יחסים.slice(0, 4);
    this.ddate = new Date();
    this.date = `${this.ddate.getDate()}/${this.ddate.getMonth()}/${this.ddate.getFullYear()}`;
    this.textBorders = `<br><span>${this.shem} חולקת גבול עם המדינות הבאות:<br></span>
    <span class="borders"></span>`;
    this.bordersUndefaind = `<br><span>${this.shem} אינה חולקת גבול עם אף מדינה. </span>`
  }
  render() {
    let article = document.createElement("article");
    article.className = " mx-auto mt-2 row justify-content-evenly";
    document.querySelector(this.parent).innerHTML = "";
    document.querySelector(this.parent).append(article);
    article.innerHTML = `
    <div id="style-selector-control" class="map-control">
    <select id="style-selector" class="selector-control rounded-0 form-select" style="border-radius: 2px !important;">
      <option value="default">אורגינל</option>
      <option value="silver">כסוף</option>
      <option value="night" selected="selected">אפל</option>
      <option value="retro">רטרו</option>
    </select>
    </div>
    <h1 class="display-2 text-secondary text-center">${this.shem} - <span class="display-3">${this.originalName}</span></h1>
    <div class="card mb-3 col-md-10">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${this.flag} class="img-fluid rounded-start m-1 mt-4 me-2" alt="Card title">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this.shem} <i class="bi bi-volume-up convert"></i></h5>
            <p class="card-text textarea" style="direction: rtl;">
            <span>${this.shem}</span>
            <span>(${this.name}),</span>
            <span>או בשמה המקורי "${this.shemRishmi}"</span>
            <span>(${this.originalName}), מתפרסת על פני שטח של ${this.area} דונם</span>
            <span>מיבשת ${this.yabeshet}ואוכלוסייתה מונה כ-${this.population} תושבים, העיר ${this.bira} (${this.capital}) מוכרת כבירתה הרשמית, </span>
            <span>קוד המטבע המקומי הינו ${this.coin}, כאשר הסמל המייצג אותו הוא ${this.symbol}.</span>
            <br><span>על פי נתוני משרד החוץ, יחסי ישראל ו${this.shem} מוגדרים בסטטוס "${this.status2}" רשמיים החל משנת ${this.year}, מה שאומר כי ל${this.shem} ${this.shagrir}בישראל.</span>
            <br><span class="bords"></span>
            </p>
            <p class="card-text"><small class="text-muted">מעודכן נכון לתאריך ${this.date}</small></p>
            <a href="https://he.wikipedia.org/wiki/${this.shem}" class="btn btn-outline-primary">לקריאה נוספת >></a>
          </div>
        </div>
      </div>
    </div>
    `;

    let convert = document.querySelector(".convert");
    let textarea = document.querySelector(".textarea");

    // Adds voice synthesis to the text.
    let speech = new SpeechSynthesisUtterance();
    convert.addEventListener("click", () => {
      speech.text = textarea.innerHTML;
      speech.lang = "he-IL";
      speech.pitch = 1;
      speech.volume = 1;
      speech.rate = 0.6;
      speechSynthesis.speak(speech);
    });


    // fill the list of borders.
    if (this.borders) {
      document.querySelector(".bords").innerHTML = this.textBorders;
      this.borders.forEach((element) => {
        let borders = document.querySelector(".borders");
        borders.innerHTML += `
      <a href="#" class="btn badge text-bg-info bg-opacity-25 country" id="${this.contries[element]}">${this.contries[element]}</a>
      `;
      });
    }else{
      document.querySelector(".bords").innerHTML = this.bordersUndefaind;
    }

    // initial the map location.
    initMap(this.location[0], this.location[1]);
    clickButtons();
  }
}
