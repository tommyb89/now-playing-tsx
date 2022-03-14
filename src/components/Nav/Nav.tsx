import {FC} from 'react';
import "./Nav.scss";
import logo from "../../assets/images/logo.svg";


const Nav: FC = () => {
  return (
    <nav className="nav"> 
      <img className="nav__logo" src={logo} alt="logo" />
      <ul className="nav__links">
        <li className="nav__item">Discover</li>
        <li className="nav__item">Movies</li>
        <li className="nav__item">TV shows</li>
        <li className="nav__item">People</li>
      </ul>
    </nav>
  );
}

export default Nav;