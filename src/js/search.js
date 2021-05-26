import { DOMSelectors, draw_grid } from "./DOM";
import { episodes } from "./episodes";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;

    const searchQuery = async function () {
      try {
        console.log(searchParams);
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/?name=" + searchParams
        );
        if (response.ok && searchParams != "") {
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
            console.log(id);

            draw_grid(id, episodeArr);
          });
        } else {
          if (searchParams == "") {
            alert("Please enter character name");
          } else {
            window.alert("There is no character by this name");
          }
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    searchQuery();
  });
};

listen();
