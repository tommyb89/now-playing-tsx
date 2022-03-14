import React, { FC } from "react";
import { Movie } from "../../data/api";

interface MovieProps {
	id: number;
	title: string;
	text: string;
	imgSrc: string | number;
	year: string;
	rating: number;
}

export const MovieCard: FC<MovieProps> = ({
	id,
	title,
	text,
	imgSrc,
	year,
	rating,
}) => {
	return (
		<article className="card">
			<img src="" alt="" />

			<h3 className="card__title">{title}</h3>
		</article>
	);
};
