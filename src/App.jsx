// src/App.jsx
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import { Layout } from "./components/Layout";
import { routes } from "./routes";
import SEO from "./components/SEO";
// import "react-toastify/dist/ReactToastify.css";

// Component to scroll to top on route change
const ScrollToTop = () => {
	const { pathname } = useLocation();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

// Helper function to flatten subRoutes
const flattenRoutes = (routeArray) => {
	const all = [];
	routeArray.forEach((r) => {
		if (r.subRoutes) {
			// If a route has subRoutes, push each one separately
			r.subRoutes.forEach((sr) => {
				all.push(sr);
			});
		} else {
			// Otherwise, push the route as is
			all.push(r);
		}
	});
	return all;
};

const AppRoutes = () => {
	// Flatten all routes (including subRoutes) into a single array
	const allRoutes = flattenRoutes(routes);

	return (
		<Routes>
			{allRoutes.map(({ path, component: Component, title, description }) => (
				<Route
					key={path}
					path={path}
					element={
						<>
							<SEO title={title} description={description} />
							<Component />
						</>
					}
				/>
			))}
		</Routes>
	);
};

const App = () => (
	<HelmetProvider>
		<Router>
			<ScrollToTop />
			<Layout>
				<AppRoutes />
			</Layout>
		</Router>
	</HelmetProvider>
);

export default App;
