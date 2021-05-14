import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(
      `https://superheroapi.com/api/access-token/character-id`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
