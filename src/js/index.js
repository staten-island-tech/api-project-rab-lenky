import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}`
    );
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
