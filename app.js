import { doApi } from "./createCountry.js";
import { fillList, declareEvents } from "./fillList.js";

const init = () => {
  doApi("ישראל");
  fillList();
  declareEvents();
  clickButtons();
};

export const clickButtons = () => {
  let countries = document.querySelectorAll(".country");
  countries.forEach((country) => {
    country.addEventListener("click", () =>
    doApi(country.id));
  });
};

init();
