import { ButtonStyle } from "./Button.styled"

export const Button = ({textValue, size, theme}) => {

	const getButtonSize = size => {
		switch(size) {
			default:
			case 'xsmall':
			case 'small':
				return 10;
			case 'medium':
				return 14;
			case 'large':
				return 16;
		}
	}

	return (
		<ButtonStyle className={`${theme} ${size}`}>
			{textValue}
		</ButtonStyle>
		
	)
}