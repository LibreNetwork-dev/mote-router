window.routes = [];

window.createRoute = function (url, elm) {
	routes.push({ url, elm });
};

window.renderRoutes = function () {
	const app = document.getElementById("root");
	const route = routes.find((r) => r.url == window.location.pathname);

	app.innerHTML = "";

	if (route) {
		let node;
		if (typeof route.elm === "function") {
			node = route.elm();
		} else if (route.elm instanceof DocumentFragment) {
			node = route.elm.cloneNode(true);
		} else {
			node = route.elm;
		}

		app.appendChild(node);
	} else {
		app.innerHTML = "<h1>404 Not Found</h1>";
	}
};

window.Navigate = function (url) {
	history.pushState({}, "", url);
	window.renderRoutes();
};

window.onpopstate = () => {
	window.renderRoutes();
};
