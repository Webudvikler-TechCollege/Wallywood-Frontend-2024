import styled from "styled-components"

export const NavBarBurgerStyle = styled.div`
  width: 25px;
  height: 25px;
  right: 10px;
  position: absolute;
  cursor: pointer;

  .burgerMenu {
    @media (width > 1199px) {
      display: none;
    }

    .burgerMenuLine {
      position: absolute;
      width: 100%;
      height: 12%;
      background-color: white;
      transition: 0.2s ease-in-out;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      &:last-child {
        top: 90%;
        left: 0;
      }
    }

    .burgerMenuActive {

      .burgerMenuLine {
        position: absolute;
        width: 100%;
        height: 12%;
        background-color: white;
        transition: 0.2s ease-in-out;

        &:first-child {
          top: 50%;
          left: 0;
          transform: translateY(-50%) rotate(45deg);
        }

        &:nth-child(2) {
          top: 50%;
          left: 0;
          transform: translateY(-50%) rotate(45deg);
        }

        &:last-child {
          top: 50%;
          left: 0;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }
    
    .menu {
      display: none;
    }

    .activeMenu {
      position: fixed;
      display: flex;
      box-sizing: border-box;
      list-style: none;
      top: 5vh;
      right: 0;
      width: 100%;
      padding: 0 0 30px 40px;
      margin: 10px;
      background-color: #111;

      .navigationLinks {
        text-decoration: none;
        color: $primaryColor;
        font-size: 1em;
      }
    }
  }
`
