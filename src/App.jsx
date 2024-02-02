import "./App.scss"
import { AppRouter } from "./Components/AppRouter/AppRouter"
import { Header } from "./Components/Partials/Header"
import { Footer } from "./Components/Partials/Footer"
import { ContainerStyle } from "./Styled/Container.style"

const App = () => {
  return (
    <ContainerStyle $maxwidth={1024}>
      <Header />
      <AppRouter />
      <Footer />
    </ContainerStyle>
  )
}

export default App
