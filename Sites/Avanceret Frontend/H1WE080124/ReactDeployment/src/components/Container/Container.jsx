import { ContainerStyle } from "./Container.styled"

export const Container = ({ children, width }) => {
	
  return (
	<ContainerStyle width={width}>
		{children}
	</ContainerStyle>
  )
}
