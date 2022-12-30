import Popular from "./pages/popular.js";
import Router from "./service/router.js";
import NotFound from "./components/notFound/notFound.js";
import Bookmarks from "./pages/bookmarks.js";
import Details from "./pages/Details.js";

const routes = [
  {
    match: (url) => {
      return url === "/";
    },
    renderRoute: Popular,
  },
  {
    match: (url) => {
      return url === "/bookmarks";
    },
    renderRoute: Bookmarks,
  },
  {
    match: (url) => {
      return url.includes("/movie/");
    },
    renderRoute: Details,
  },
  {
    match: () => true,
    renderRoute: NotFound,
  },
];

const router = new Router(routes);

router.reroute();
