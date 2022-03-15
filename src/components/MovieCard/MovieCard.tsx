import { FC } from "react";
import "./MovieCard.scss";

interface MovieProps {
	id: number;
	title: string;
	imgSrc: string | number;
	rating: number;
}

const BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieCard: FC<MovieProps> = ({ title, imgSrc, rating }) => {
	return (
		<article className="card">
			<img className="card__img" src={BASE_URL + imgSrc} alt="" />
			<div className="card__info">
				<h3 className="card__title">{title}</h3>
				<span>{rating}</span>
			</div>
		</article>
	);
};
