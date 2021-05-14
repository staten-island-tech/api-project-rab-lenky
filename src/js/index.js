import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

//const key = "YOURKEYHERE";

fetch("https://superheroapi.com/api/access-token/search/batman")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {
    console.log(data);
    displayCocktail(data);
  })
  .catch((error) => {
    console.error("FETCH ERROR:", error);
  });
