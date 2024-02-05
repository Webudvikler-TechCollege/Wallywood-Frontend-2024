import styled from 'styled-components'
import { ResetButton } from '../../Styled/Mixins'

export const LoginInfoStyle = styled.div`
	text-align: right;
	font-size: 0.8rem;

	@media screen and (max-width: 768px) {
		display: none;
	}

	span {
		display: inline-block;
		margin-right: 0.3rem;
	}

	button {
		${ ResetButton };
		cursor: pointer;
		vertical-align: middle; // Adjust the vertical alignment here
	}
`