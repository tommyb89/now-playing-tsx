import { FC } from "react";
import "./Filter.scss";

interface Props {
	value: number;
	handleChange: any;
}

const Filter: FC<Props> = ({ handleChange, value }) => {
	return (
		<section className="filter">
			<h2 className="filter__heading">Now Playing Movies</h2>
			<div className="filter__wrapper">
				<div className="filter__container">
					<h3 className="filter__name">Filter movies by rating</h3>
				</div>

				<form className="filter__filter">
					<label htmlFor="rating">
						Rating {">"} {value}
					</label>
					<input
						className="filter__slider"
						type="range"
						id="rating"
						name="rating"
						min={0}
						max={10}
						onChange={handleChange}
						value={value}
						step="0.1"
					/>

					<label htmlFor=""></label>
				</form>
			</div>
		</section>
	);
};

export default Filter;
