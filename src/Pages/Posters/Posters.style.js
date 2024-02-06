import styled from "styled-components"

export const PostersStyle = styled.div`
  border: solid 2px ${props => props.color};
  
  display: grid;
  grid-template-columns: 1fr 4fr;

  @media screen and (width < 820px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    max-width: 250px;
    
	@media screen and (width < 820px) {
		max-width: 100% !important;
    }
  }
`
