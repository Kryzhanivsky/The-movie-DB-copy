import api from "../service/api.js";
import Loading from "../components/loading/loading.js";
import MovieDetails from "../components/movieDetails/movieDetails.js";
import ErrorMessage from "../components/errorMessage/errorMessage.js";
import List from "../components/list/list.js";
import EmptyList from "../components/emptyList/emptyList.js";

const Details = async () => {
  const { pathname } = window.location;
  const [, id] = pathname.split("movie/");

  const app = document.getElementById("app");

  app.innerHTML = "";
  const loadingMessage = Loading();
  try {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.id = "details-wrapper";
    app.append(wrapper);
    wrapper.append(loadingMessage);

    const movie = await api.fetchMovieDetails(id);

    wrapper.append(MovieDetails(movie));

    const recommendations = await api.fetchRecommendations(id);

    if (recommendations.length > 0) {
      wrapper.append(List(recommendations));
    } else {
      wrapper.append(EmptyList());
    }
  } catch (e) {
    app.append(ErrorMessage(e, Details));
  } finally {
    loadingMessage.remove();
  }
};

export default Details;
