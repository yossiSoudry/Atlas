import { initMap } from "./map.js";
import { clickButtons } from "./app.js";
export const renderIsrael = () => {
  let article = document.createElement("article");
    article.className = " mx-auto mt-2 row justify-content-evenly";
    document.querySelector("#id_main").innerHTML = "";
    document.querySelector("#id_main").append(article);
    article.innerHTML = `
    <div id="style-selector-control" class="map-control">
    <select id="style-selector" class="selector-control rounded-0 form-select" style="border-radius: 2px !important;">
      <option value="default">אורגינל</option>
      <option value="silver">כסוף</option>
      <option value="night" selected="selected">אפל</option>
      <option value="retro">רטרו</option>
    </select>
    </div>
    <h1 class="display-2 text-secondary text-center">ישראל - <span class="display-3">מדינת ישראל</span></h1>
    <div class="card mb-3 col-md-10">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://flagcdn.com/w320/il.png" class="img-fluid rounded-start m-1" alt="Card title">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">ישראל <i class="bi bi-volume-up convert"></i></h5>
            <p class="card-text textarea" style="direction: rtl;">
            <span>ישראל</span>
            <span>(israel),</span>
            <span>או בשמה המקורי "מדינת ישראל"</span>
            <span>(State of Israel), מתפרסת על פני שטח של 20,770 דונם</span>
            <span>מיבשת אסיה ואוכלוסייתה מונה כ-9,216,900 תושבים, העיר ירושלים (Jerusalem) מוכרת כבירתה הרשמית, </span>
            <span>קוד המטבע המקומי הינו ILS, כאשר הסמל המייצג אותו הוא ₪.</span>
            <br><span class="bords">ישראל חולקת גבול עם המדינות הבאות:
            <br><a href="#" class="btn badge text-bg-info bg-opacity-25 country" id="Lebanon">לבנון</a>
            <a href="#" class="btn badge text-bg-info bg-opacity-25 country" id="Syria">סוריה</a>
            <a href="#" class="btn badge text-bg-info bg-opacity-25 country" id="Jordan">ירדן</a>
            <a href="#" class="btn badge text-bg-info bg-opacity-25 country" id="Egypt">מצרים</a>
            </span>
            </p>
            <p class="card-text"><small class="text-muted">מעודכן נכון לתאריך ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}</small></p>
            <a href="https://he.wikipedia.org/wiki/ישראל" class="btn btn-outline-primary">לקריאה נוספת >></a>
          </div>
        </div>
      </div>
    </div>`

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

    
    initMap(31.47, 35.13);
    clickButtons();
}