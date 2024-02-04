import styled from 'styled-components'
import { ResetList } from '../../Styled/Mixins'

export const NavBarPrimaryStyle = styled.nav`
	ul {
		${ResetList}

		@media screen and (width < 820px) {
			display: none;			
		}

		li {
			display: inline-block;
			margin-left: 1.2rem;

			a {
				font-family: ${props => props.theme.fonts[0]};
				text-decoration: none;
				color: ${props => props.theme.colors.tertiary};
				font-size: 1rem;
				white-space: nowrap;

				&:hover {
					color: ${props => props.theme.colors.secondary};
				}
			}
		}
	}
`