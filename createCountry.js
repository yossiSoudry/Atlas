import Country from "./countryElement.js";
import { renderIsrael } from "./renderIsrael.js";


// call two APIs and receive the data country.
export const doApi = async(_country) => {
  if (_country == 'israel' || _country == 'Israel' || _country == 'ISRAEL' || _country == 'ישראל'){
    return renderIsrael();
  }
  else if (_country != 'palestine' && _country != 'Palestine'){
    let url = `https://restcountries.com/v3.1/name/${_country}`;
    let url2 = `https://data.gov.il/api/3/action/datastore_search?resource_id=b1fdc757-07e3-4875-a023-99e59ac44f24&q=${_country}`
    try{
      let resp = await fetch(url);
      let data = await resp.json();
      let obj1 = data[0];
      let resp2 = await fetch(url2);
      let data2 = await resp2.json();
      let obj2 = data2.result.records[0];
      console.log(obj1);
      console.log(obj2);
      createCountry(obj1, obj2)
    }
    catch(err){
      console.log(err);
      alert("אנא בחר מדינה מתוך רשימת החיפוש");
    }
  }
  else{
    alert("מצטערים, אך אין מדינה כזו...");
  }
}

// render the data country to the document.
export const createCountry = (_obj1, _obj2) => {
  let country = new Country("#id_main", _obj1, _obj2);
  country.render();
}











