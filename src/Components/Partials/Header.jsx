import { CartIcon } from "../Cart/CartIcon"
import { HeaderStyle } from "./Header.style"
import { NavBarPrimary } from "./NavBarPrimary"
import { Link } from "react-router-dom"
import { LoginInfo } from "../Auth/LoginInfo"

export const Header = () => {
  return (
    <HeaderStyle>
      <section className="userinfo">
        <LoginInfo />
      </section>
      <div>
        <Link to="/">Hallywood</Link>
        <NavBarPrimary />
      </div>
    </HeaderStyle>
  )
}
