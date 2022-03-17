import { FC, useState } from "react";
import "./MovieCard.scss";
import { motion } from "framer-motion";

interface MovieProps {
	id: number;
	title: string;
	imgSrc: string | number;
	rating: number;
}

const BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieCard: FC<MovieProps> = ({ title, imgSrc, rating }) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.2 },
			}}
			layout
			className="card"
		>
			<img className="card__img" src={BASE_URL + imgSrc} alt="" />

			<div className="card__info">
				<h3 className="card__title">{title}</h3>
				<p className="card__rating">
					Rating: <span className="card__rating-num">{rating}</span>
				</p>
			</div>
		</motion.div>
	);
};
