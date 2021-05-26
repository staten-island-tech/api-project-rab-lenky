const DOMSelectors = {
  grid: document.querySelector(".movie-grid"),
  searchForm: document.getElementById("search-form"),
  searchArea: document.getElementById("search-area"),
};

const draw_grid = function (id, episodeArr) {
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
    ${episodeArr}
  </div>
</div>
</div>
</div>`
  );
};
export { DOMSelectors, draw_grid };
