import styled from 'styled-components'
import { ResetList } from '../../Styled/Mixins'

export const GenreNavStyle = styled.nav`

	ul {
		${ResetList}

		@media screen and (width < 820px) {
			border: solid 1px #000;
			display: none;
		}

		a {
			text-decoration: none;
			color: ${props => props.theme.colors.tertiary}

		}
		.active {
			color: ${props => props.theme.colors.secondary}
		}
	}

	select {
		display: none;
		width: 100%;
		padding: 0.4rem;
		margin: 0 auto;

		@media screen and (width < 820px) {
			display: block;
			margin-bottom: 1rem;
		}
	}

`