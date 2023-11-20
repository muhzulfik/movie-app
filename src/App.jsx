import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/organism/Layout";
import HomePage from "./components/pages/HomePage";
import WatchListPage from "./components/pages/WatchListPage";
import FavoritePage from "./components/pages/FavoritePage";
import withAuth from "./utils/withAuth";

const AuthWatchListPage = withAuth(WatchListPage);
const AuthFavoritePage = withAuth(FavoritePage);

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/watchlist" element={<AuthWatchListPage />} />
					<Route path="/favorite" element={<AuthFavoritePage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
