import styled from 'styled-components'
import {Reset} from '../../Styled/Mixins'

export const PosterListStyle = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	
	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	
	@media screen and (width < 768px) {
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}



	div {
		//border: solid 1px #000;
		padding-bottom: 2rem;
		text-align: center;
		figure {
			${Reset}

			img {
				max-width: 14rem;
				border: solid 1px ${props => props.theme.colors.senary}
			}
		}

		a {
			text-decoration: none;
			color: ${props => props.theme.colors.tertiary};
			font-size: 1rem;
			font-weight: bold;
		}

		p span {
			font-size: ${props => props.theme.fontsizes.xs};
			color: ${props => props.theme.colors.primary};

		}
	}
`