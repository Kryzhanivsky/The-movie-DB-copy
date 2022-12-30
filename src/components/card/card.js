const Card = (item) => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  let isSelected = false;
  if (bookmarks) {
    isSelected =
      bookmarks.filter((bookmark) => bookmark.id === item.id).length > 0;
  }

  const card = document.createElement("div");
  card.className = "card";
  card.dataset.movieId = item.id;
  card.innerHTML = `
        <img class="card__img" src="https://www.themoviedb.org/t/p/original${
          item.poster_path
        }" alt="Poster">
        <div class="card__basement">
            <h2 class="card__title">${item.title}</h2>
            <button class="card__like">
            <i class="fa fa-heart ${
              isSelected ? "selected" : ""
            }" aria-hidden="true"></i></button>
        </div>
    `;

  card.addEventListener("click", (evt) => {
    if (evt.target.closest("i.fa-heart")) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

      if (bookmarks) {
        if (bookmarks.find((bookmark) => bookmark.id === item.id)) {
          const results = bookmarks.filter(
            (bookmark) => bookmark.id !== item.id
          );
          localStorage.setItem("bookmarks", JSON.stringify(results));
          if (window.location.pathname === "/bookmarks") {
            card.remove();
          }
        } else {
          localStorage.setItem(
            "bookmarks",
            JSON.stringify([...bookmarks, item])
          );
        }
      } else {
        localStorage.setItem("bookmarks", JSON.stringify([item]));
      }

      evt.target.classList.toggle("selected");
    } else {
      window.history.pushState(
        null,
        null,
        `/movie/${evt.currentTarget.dataset.movieId}`
      );
    }
  });

  return card;
};

export default Card;
