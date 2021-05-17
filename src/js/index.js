import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const query = async function () {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    data.results.forEach((id) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
      <div class="movie-card-front">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
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

        <div class="movie-genres">
          <li class="movie-genre">Sci-Fi</li>
          <li class="movie-genre">Fantasy</li>
          <li class="movie-genre">Horror</li>
        </div>
      </div>
    </div>`
      );
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
query();
