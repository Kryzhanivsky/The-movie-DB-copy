class Api {
  currentPage = 1;
  total_pages = 0;
  total_results = 0;

  fetchPopularMovies = async (page = 1) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=5564e5173f0dc309699f723b38077635&language=en-US&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`Request ended with status code: ${response.status}`);
      }

      const data = await response.json();

      this.currentPage = data.page;
      this.total_results = data.total_results;
      this.total_pages = data.total_pages;

      return data.results;
    } catch (e) {
      throw e;
    }
  };

  fetchMoviesBySearchText = async (searchString = "", page = 1) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5564e5173f0dc309699f723b38077635&language=en-US&include_adult=false&query=${searchString}&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`Finished with status code: ${response.status}`);
      }

      const data = await response.json();

      this.currentPage = data.page;
      this.total_results = data.total_results;
      this.total_pages = data.total_pages;

      return data.results;
    } catch (e) {
      throw e;
    }
  };

  fetchBookmarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    this.currentPage = 1;
    this.total_pages = 1;

    if (bookmarks) {
      this.total_results = bookmarks.length;
      return bookmarks;
    } else {
      this.total_results = 0;
      return [];
    }
  };

  fetchBookmarksBySearch = (query) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    this.currentPage = 1;
    this.total_pages = 1;

    if (bookmarks) {
      const filteredBookmarks = bookmarks.filter((bookmark) =>
        bookmark.title.toLowerCase().includes(query.toLowerCase())
      );
      this.total_results = filteredBookmarks.length;
      return filteredBookmarks;
    } else {
      this.total_results = 0;
      return [];
    }
  };

  fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5564e5173f0dc309699f723b38077635&language=en-US`
      );

      if (!response.ok) {
        throw new Error(`Request ended with status code: ${response.status}`);
      }
      return response.json();
    } catch (e) {
      throw e;
    }
  };

  fetchRecommendations = async (id, page = 1) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5564e5173f0dc309699f723b38077635&language=en-US&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`Request ended with status code: ${response.status}`);
      }

      const data = await response.json();

      this.currentPage = data.page;
      this.total_results = data.total_results;
      this.total_pages = data.total_pages;

      return data.results;
    } catch (e) {
      throw e;
    }
  };
}

export default new Api();
