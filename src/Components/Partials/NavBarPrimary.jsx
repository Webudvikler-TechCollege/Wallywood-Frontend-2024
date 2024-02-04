import { NavLink } from "react-router-dom";
import { NavBarPrimaryStyle } from "./NavBarPrimary.style";
import { NavBarBurger } from "./NavBarBurger";

export const NavBarPrimary = () => {
	return (
		<NavBarPrimaryStyle>
			<NavBarBurger />
			<ul>
				<li><NavLink to="/">HOME</NavLink></li>
				<li><NavLink to="/posters/action">PLAKATER</NavLink></li>
				<li><NavLink to="/om_os">OM OS</NavLink></li>
				<li><NavLink to="/contact">KONTAKT</NavLink></li>
				<li><NavLink to="/cart">KURV</NavLink></li>
				<li><NavLink to="/login">LOGIN</NavLink></li>
			</ul>
		</NavBarPrimaryStyle>
	);
}