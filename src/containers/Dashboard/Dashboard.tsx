import { FC, useEffect, useState } from "react";
import "./Dashboard.scss";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import MovieCatalogue from "../MovieCatalogue/MovieCatalogue";
import { getMovies, Movie } from "../../data/api";

const Dashboard: FC = () => {
	const [movies, setMovies] = useState<Movie[] | null>([]);

	useEffect(() => {
		(async () => {
			setMovies((await getMovies()) ?? null);
		})();
	}, []);

	return (
		<>
			<Nav />
			<main className="main">
				<Sidebar />
				// issue?
				{movies ? <MovieCatalogue movies={movies} /> : "...Loading"}
			</main>
		</>
	);
};

export default Dashboard;
