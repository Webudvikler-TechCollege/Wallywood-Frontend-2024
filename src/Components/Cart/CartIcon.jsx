import { CartIconStyle } from "./CartIcon.style";
import { useCartItems } from "../Providers/CartProvider";
import Svg from '../../Assets/svg/icon_cart.svg'
import { Link } from "react-router-dom";

const CartIcon = () => {
	const { cartItems } = useCartItems()

	return (
		<CartIconStyle>
			<Link to="/cart">
				<img src={Svg} />
			</Link>
			<p>
			<Link to="/cart">
				Du har {cartItems.length} varer i kurven
			</Link>	
			</p>
		</CartIconStyle>
	);
}

export default CartIcon;
