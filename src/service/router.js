class Router {
  constructor(routes) {
    this._routes = routes;

    window.history.pushState = (data, title, ulr) => {
      History.prototype.pushState.apply(window.history, [data, title, ulr]);
      this.reroute();
    };

    window.onpopstate = () => {
      this.reroute();
    };
  }

  reroute = () => {
    const matchedRoute = this._routes.find((route) => {
      const isMatched = route.match(window.location.pathname);

      return isMatched;
    });

    matchedRoute.renderRoute();
  };
}

export default Router;
