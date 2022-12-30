const Header = () => {
  const category = window.location.pathname;
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="header__wrapper">
        <div class="header__logo">TMDB</div>
        <form class="header__search search">
            <input class="search__input" name="search" type="text" placeholder="search">
            <button type="submit" class="search__submit-btn">Enter</button>
        </form>
    </div>
    <div class="categories">
        <a class="categories__link ${
          category === "/" ? "categories__link_active" : ""
        }" href="/">Popular movies</a>
        <a class="categories__link ${
          category === "/bookmarks" ? "categories__link_active" : ""
        }" href="/bookmarks">Bookmarks</a>
    </div>
  `;

  header.addEventListener("click", (evt) => {
    evt.preventDefault();
    const form = evt.target.closest("form.header__search");
    const logo = evt.target.closest("div.header__logo");
    const submitBtn = evt.target.closest("button.search__submit-btn");
    const link = evt.target.closest("a.categories__link");

    if (logo) {
      window.history.pushState(null, null, "/");
    }

    if (submitBtn) {
      evt.preventDefault();
      const search = new FormData(form).get("search");
      if (search) {
        window.location.search = `?query=${search}`;
        evt.target[0].value = "";
      }
    }

    if (link) {
      window.history.pushState(null, null, link.href);
    }
  });

  return header;
};

export default Header;
