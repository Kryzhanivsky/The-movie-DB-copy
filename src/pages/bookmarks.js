import Header from "../components/header/header.js";
import asyncProvider from "../service/asyncProvider.js";
import api from "../service/api.js";
import List from "../components/list/list.js";
import EmptyList from "../components/emptyList/emptyList.js";

const app = document.getElementById("app");

const Bookmarks = async () => {
  app.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.id = "Bookmarks-wrapper";
  app.append(wrapper);
  wrapper.append(Header());
  const query = new URLSearchParams(window.location.search).get("query");
  const movies = await asyncProvider(
    wrapper.id,
    query ? () => api.fetchBookmarksBySearch(query) : api.fetchBookmarks
  );
  if (movies.length > 0) {
    wrapper.append(List(movies));
  } else {
    wrapper.append(EmptyList("No bookmarks found."));
  }
};

export default Bookmarks;
