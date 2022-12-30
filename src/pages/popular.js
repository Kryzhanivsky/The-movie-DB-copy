import Header from "../components/header/header.js";
import asyncProvider from "../service/asyncProvider.js";
import api from "../service/api.js";
import List from "../components/list/list.js";
import EmptyList from "../components/emptyList/emptyList.js";
import LoadMoreBtn from "../components/loadMoreBtn/loadMoreBtn.js";

const app = document.getElementById("app");

const Popular = async () => {
  app.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.id = "popular-wrapper";
  app.append(wrapper);
  wrapper.append(Header());
  const query = new URLSearchParams(window.location.search).get("query");
  const movies = await asyncProvider(
    wrapper.id,
    query ? () => api.fetchMoviesBySearchText(query) : api.fetchPopularMovies
  );
  if (movies.length > 0) {
    wrapper.append(List(movies));
  } else {
    wrapper.append(EmptyList());
  }
  if (api.total_pages > api.currentPage) {
    wrapper.append(LoadMoreBtn(wrapper.id));
  }
};

export default Popular;
