import { DOMSelectors } from "./DOM";
import { genres } from "./episodes";

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
        if (response.ok) {
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
            console.log(id);

            DOMSelectors.grid.insertAdjacentHTML(
              "beforeend",
              `<div class="movie-card">
          <div class="movie-card-front">
            <img
              src=${id.image}
              alt=""
              class="poster"
            />
          </div>
          <div class="movie-card-back">
            <h3 class="movie-card-header">${id.name}</h3>
            <div class="score-box">
              <p class="user-score">Status</p>
              <p class="user-score">${id.status}</p>
            </div>
    
            <div class="release-box">
              <p class="release-date">Species</p>
              <p class="release-date">${id.species}</p>
            </div>
    
            <div class="movie-genres"
              <div class="episode-list">Episode(s)
              ${genreArr}
            </div>
          </div>
        </div>
      </div>`
            );
          });
        } else {
          window.alert("There is no character by this name");
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
