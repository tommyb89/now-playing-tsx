import React, { FC, useEffect, useState } from "react";
import "./Dashboard.scss";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import MovieCatalogue from "../MovieCatalogue/MovieCatalogue";
import { getMovies, Movie } from "../../data/api";

const Dashboard: FC = () => {
	const [movies, setMovies] = useState<Movie[] | null>([]);
	const [rating, setRating] = useState<number>(0);

	const applyFilter = () => {
		if (movies && rating) {
			let updatedList = movies;

			const filteredList = updatedList.filter(
				(movie) => movie.vote_average >= rating
			);
			setMovies(filteredList);
		}
	};
	useEffect(() => {
		(async () => {
			setMovies((await getMovies()) ?? null);
		})();
	}, []);

	useEffect(() => {
		applyFilter();
	}, [rating]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRating(parseInt(e.target.value));
	};

	return (
		<>
			<Nav />
			<main className="main">
				<Sidebar value={rating} handleChange={handleChange} />
				{movies ? <MovieCatalogue movies={movies} /> : "...Loading"}
			</main>
		</>
	);
};

export default Dashboard;
