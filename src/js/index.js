import { DOMSelectors, draw_grid } from "./DOM";
import { genres } from "./episodes";

const query = async function () {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    data.results.forEach((id) => {
      let genreArr = [];
      const addGenre = function () {
        genres.forEach((element) => {
          if (id.episode.includes(element.id)) {
            genreArr.push(element.name);
            return genreArr;
          }
        });
      };
      addGenre();
      console.log(genreArr);

      draw_grid(id, genreArr);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
query();
