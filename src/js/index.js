import { DOMSelectors, draw_grid } from "./DOM";
import { episodes } from "./episodes";

const query = async function () {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    data.results.forEach((id) => {
      let episodeArr = [];
      const addEpisode = function () {
        episodes.forEach((element) => {
          if (id.episode.includes(element.id)) {
            episodeArr.push(element.name);
            return episodeArr;
          }
        });
      };
      addEpisode();
      console.log(episodeArr);

      draw_grid(id, episodeArr);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
query();
