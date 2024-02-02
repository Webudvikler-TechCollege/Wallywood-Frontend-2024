import CartIcon from "../Cart/CartIcon";
import { useAuth } from "../Providers/AuthProvider";
import { HeaderStyle } from "./Header.style";
import { NavBarPrimary } from "./NavBarPrimary";
import { Link } from "react-router-dom";

export const Header = () => {
	const { loginData } = useAuth();

	return (
		<HeaderStyle>
			<CartIcon />
			<Link to="/">Wallywood</Link>
			<NavBarPrimary />
			{loginData && <div>Du er logget ind som {loginData.user.firstname}</div>}
		</HeaderStyle>		
	);
}