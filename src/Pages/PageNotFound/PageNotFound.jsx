import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper";
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
	return (
		<ContentWrapper title="Siden blev ikke fundet">
			<p>Siden du leder efter findes ikke.</p>
			<p><Link to="/">Gå til forsiden</Link></p>
		</ContentWrapper>
	);
}