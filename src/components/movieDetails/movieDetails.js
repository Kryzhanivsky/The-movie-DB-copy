const MovieDetails = (movie) => {
  const page = document.createElement("div");
  page.innerHTML = `
      <div class="details">
          <img class="details__img" src="https://www.themoviedb.org/t/p/original${
            movie.poster_path
          }" alt="Poster">
          <div>
              <h2 class="details__title"><span>Title:</span> ${
                movie.title
              }</h2><br>
              <p class="details__text"><span>Budget:</span> ${
                movie.budget
              }</p><br>
              <p class="details__text"><span>Genres:</span> ${movie.genres.map(
                (genre) => genre.name
              )}</p><br>
              <p class="details__text"><span>Homepage:</span> <a href="${
                movie.homepage
              }">${movie.homepage}</a></p><br>
              <p class="details__text"><span>Production companies:</span> ${movie.production_companies.map(
                (company) => company.name
              )}</p><br>
              <p class="details__text"><span>Production countries:</span> ${movie.production_countries.map(
                (country) => country.name
              )}</p><br>
              <p class="details__text"><span>Release date:</span> ${
                movie.release_date
              }</p><br>
              <p class="details__text"><span>Status:</span> ${
                movie.status
              }</p><br>
              <p class="details__text"><span>Rating:</span> ${
                movie.vote_average
              }</p><br>
              <p class="details__text"><span>Votes:</span> ${
                movie.vote_count
              }</p><br>
          </div>
      </div>
      <div class="description">
      <h2 class="description__title">Description</h2>
      <p class="description__text">${movie.overview}</p><br>
      <h2 class="description__title">Recommendations</h2>
      </div>
      `;
  return page;
};

export default MovieDetails;
