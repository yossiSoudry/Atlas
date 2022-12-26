import { doApi } from "./createCountry.js";


// create object of countries
export const fillList = async () => {
  let url =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=b1fdc757-07e3-4875-a023-99e59ac44f24&limit=200";
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    let countries = data.result.records;
    // console.log(countries);
    fillOptions(countries);
  } catch (err) {
    console.log(err);
    alert("There is a problem");
  }
};

const datalist = document.querySelector("#countriesList");
const inpSearch = document.querySelector("#inpcountries");


// fill the data list of countries name.
const fillOptions = (countries) => {
  countries.forEach((element) => {
    let option = document.createElement("option");
    datalist.append(option);
    option.value = element.שם_מדינה_אנגלי_במאגר;
    option.innerHTML = element.שם_מדינה_במאגר;
  });
};


// search countries event.
export const declareEvents = () => {
  inpSearch.addEventListener("change", () => {
    translate(inpSearch.value);
    inpSearch.value = "";
    inpSearch.blur()
  });
};



// translate the search text from hebrew to english.
const translate = (sourceText) => {
  let sourceLang = 'he';
  let targetLang = 'en';

  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

  $.getJSON(url, (data) => {
    doApi(data[0][0][0]);
  });

}
