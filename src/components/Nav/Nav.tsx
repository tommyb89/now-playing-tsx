import { FC } from "react";
import "./Nav.scss";
import logo from "../../assets/images/logo.svg";

const Nav: FC = () => {
	return (
		<nav className="nav">
			<img className="nav__logo" src={logo} alt="logo" />
		</nav>
	);
};

export default Nav;
