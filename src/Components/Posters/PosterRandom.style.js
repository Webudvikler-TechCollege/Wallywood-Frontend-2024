import styled from "styled-components"
import { Reset } from "../../Styled/Mixins"

export const PosterRandomStyle = styled.section`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-column-gap: 1.5rem;

  @media screen and (width < 768px) {
    padding-top: 1rem;
    grid-template-columns: 12fr;
    grid-row-gap: 1.5rem;
  }

  > div {
    display: flex;
    text-align: left;
    figure {
      ${Reset}

      img {
        max-width: 14rem;
        border: solid 1px ${(props) => props.theme.colors.senary};

        @media screen and (width < 768px) {
          max-width: 10rem;
        }
      }
    }

    div {
      width: 100%;
      border-color: #000;
      padding-left: 0.5rem;

      @media screen and (width < 768px) {
        padding-left: 1.5rem;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.tertiary};
      font-size: 1rem;
      font-weight: bold;
    }

    h4,
    p:first-child {
      ${Reset}
    }

    h4 {
      font-size: 1.1rem;
    }

    p.description {
      content: "...";
      @media screen and (width < 768px) {
        display: none;
      }
    }

    p span {
      font-size: ${(props) => props.theme.fontsizes.xs};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`
