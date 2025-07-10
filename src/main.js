window.routes = [];

window.createRoute = function(url, elm) {
    routes.push({ url: url, element: elm });
}

window.renderRoutes = function() {
  const app = document.getElementById("root");
  const route = routes.find(r => r.url == window.location.pathname);

  app.innerHTML = "";

  if (route) {
    let node;

    if (route.element instanceof DocumentFragment) {
      node = route.element.cloneNode(true);
    } else {
      node = route.element;
    }

    app.appendChild(node);
  } else {
    app.innerHTML = "<h1>404 Not Found</h1>";
  }
}


window.Navigate = function(url) {
    history.pushState({}, "", url);
    window.renderRoutes();
}

window.onpopstate = () => {
    window.renderRoutes();
}
