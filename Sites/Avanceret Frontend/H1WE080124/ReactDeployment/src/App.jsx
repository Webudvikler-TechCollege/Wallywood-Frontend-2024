import './App.scss'
import { Button } from './components/Button/Button'
import { Container } from './components/Container/Container'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {

  return (
    <Container width="800">
      <Header />
      <Main>

        <Button textValue="Køb" size="medium" theme="light"></Button>
        <Button textValue="Send" size="large" theme="dark"></Button>
        <Button textValue="Tilmeld" size="small" theme="light"></Button>

      </Main>
      <Footer />
    </Container>
  )
}

export default App
