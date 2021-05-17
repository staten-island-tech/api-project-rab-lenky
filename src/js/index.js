//import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "https://superheroapi.com/api/10223243144381012";

const query = async function () {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
query();
//"https://superheroapi.com/api/10223243144381012/644"
