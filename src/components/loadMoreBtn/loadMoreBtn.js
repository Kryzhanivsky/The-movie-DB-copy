import Loading from "../loading/loading.js";
import Card from "../card/card.js";
import ErrorMessage from "../errorMessage/errorMessage.js";
import api from "../../service/api.js";

const LoadMoreBtn = (element) => {
  const environment = document.getElementById(element);
  const btn = document.createElement("button");
  btn.className = "loadMoreBtn";
  btn.innerText = "Load more";
  btn.dataset.nextPage = "2";

  btn.addEventListener("click", async (evt) => {
    const list = document.querySelector("div.list");
    const page = Number(evt.target.dataset.nextPage);

    const loading = Loading();
    try {
      environment.append(loading);
      const movies = await api.fetchPopularMovies(page);
      movies.forEach((movie) => list.append(Card(movie)));
    } catch (e) {
      environment.append(ErrorMessage(e));
    } finally {
      loading.remove();
    }
    evt.target.dataset.nextPage = String(page + 1);
  });

  return btn;
};

export default LoadMoreBtn;
