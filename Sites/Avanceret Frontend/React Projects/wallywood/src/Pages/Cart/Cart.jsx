import CartList from "../../Components/Cart/CartList";
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper";

export const Cart = () => {
	return (
		<ContentWrapper title="Indkøbskurv">
			<CartList />
		</ContentWrapper>

	);
}