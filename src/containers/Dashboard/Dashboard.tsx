import React, { FC, useEffect, useState } from "react";
import "./Dashboard.scss";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Sidebar/Sidebar";
import MovieCatalogue from "../MovieCatalogue/MovieCatalogue";
import { getMovies, Movie } from "../../data/api";

const Dashboard: FC = () => {
	const [movies, setMovies] = useState<Movie[] | null>([]);
	const [displayMovies, setDisplayMovies] = useState<Movie[] | null>([]);
	const [rating, setRating] = useState<number>(0);

	useEffect(() => {
		initialApiCall();
	}, []);

	useEffect(() => {
		if (!movies) {
			return;
		}
		applyFilter(movies, rating);
	}, [movies, rating]);

	const initialApiCall = async () => {
		const res = (await getMovies()) ?? null;
		setMovies(res);
	};

	const applyFilter = (movies: Movie[], rating: number = 0) => {
		setDisplayMovies(movies.filter((movie) => movie.vote_average >= rating));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRating(parseInt(e.target.value));
	};

	return (
		<>
			<Nav />
			<main className="main">
				<Sidebar value={rating} handleChange={handleChange} />
				{displayMovies ? (
					<MovieCatalogue movies={displayMovies} />
				) : (
					"...Loading"
				)}
			</main>
		</>
	);
};

export default Dashboard;
