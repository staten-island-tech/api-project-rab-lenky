//import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "https://superheroapi.com/api/10223243144381012";

const query = async function () {
  try {
    const response = await fetch(
      "https://superheroapi.com/api/10223243144381012/search/superman"
    );
    const data = await response.json();
    console.log(date);
  } catch (error) {
    console.log(error);
    alert("Hey Something Went Wrong");
  }
};
query();
