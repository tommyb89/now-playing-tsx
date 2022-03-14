import { FC } from "react";
import "./Sidebar.scss";

interface Props {
	value: any;
	handleChange: any;
}

const Sidebar: FC<Props> = ({ handleChange, value }) => {
	return (
		<section className="sidebar">
			<h2 className="sidebar__heading">Now Playing Movies</h2>
			<div className="sidebar__wrapper">
				<div className="sidebar__container">
					<h3 className="sidebar__name">Filter</h3>
				</div>
				<div className="sidebar__filter">
					<form>
						<label htmlFor="rating">Rating: {value} </label>
						<input
							type="range"
							id="rating"
							name="rating"
							min={0}
							max={10}
							onChange={handleChange}
							value={value}
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
