import "./App.scss"
import { AppRouter } from "./Components/AppRouter/AppRouter"
import { Header } from "./Components/Partials/Header"
import { Footer } from "./Components/Partials/Footer"
import { ContainerStyle } from "./Styled/Container.style"
import CartIcon from "./Components/Cart/CartIcon"

const App = () => {
  return (
    <ContainerStyle $maxwidth={1024}>
      <CartIcon></CartIcon>
      <Header></Header>
      <AppRouter />
      <Footer></Footer>
    </ContainerStyle>
  )
}

export default App
