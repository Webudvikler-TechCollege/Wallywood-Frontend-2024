import { CartIconStyle } from "./CartIcon.style";
import { useCartItems } from "./CartProvider";
import Svg from '../../Assets/svg/icon_cart.svg'
import { Link } from "react-router-dom";

export const CartIcon = () => {
	const { cartItems } = useCartItems()

	return (
		<CartIconStyle>
			<Link to="/cart">
				<img src={Svg} title={`Du har ${cartItems.length} varer i kurven`} />
			</Link>
		</CartIconStyle>
	);
}