import { HeaderStyle } from "./Header.style";
import { NavBarPrimary } from "./NavBarPrimary";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<HeaderStyle>
			<Link to="/">Wallywood</Link>
			<NavBarPrimary />
		</HeaderStyle>		
	);
}