import { FC } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Movie } from "../../data/api";

const MovieCatalogue: FC<{}> = ({ movies }) => {
	console.log(movies);
	return (
		<section className="catalogue">
			{movies.map((movie: Movie) => {
				return (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						text={movie.overview}
						imgSrc={movie.poster_path}
						year={movie.release_date}
						rating={movie.vote_average}
					/>
				);
			})}
		</section>
	);
};

export default MovieCatalogue;
