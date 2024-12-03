import styled from 'styled-components'

export const ButtonStyle = styled.button`
	border: solid 1px #000;
	padding: 0.5rem;
	font-size: ${props => props.size}px;

	&.small {
		font-size: 10pt;
	}

	&.medium {
		font-size: 12pt;
	}

	&.large {
		font-size: 14pt;
	}


	&.light {
		background-color: white;
		color: black;
	}

	&.dark {
		background-color: black;
		color: white;
	}
`