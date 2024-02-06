import { useCart } from "../../Components/Cart/CartProvider";
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper";

export const Cart = () => {
	const { cartItems } = useCart()
	return (
		<ContentWrapper title="Indkøbskurv">
			<ul>
			{cartItems.map(item => {
				return (
					<li key={item.id}>
						{item.poster.name}
					</li>
				)
			})}
			</ul>
		</ContentWrapper>

	);
}