import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./Styled/Global.style.js"
import { theme } from "./Styled/Theme.js"
import { GenreProvider } from "./Components/Genre/GenreProvider.jsx"
import { AuthProvider } from "./Components/Auth/AuthProvider.jsx"
import { PosterProvider } from "./Components/Posters/PosterProvider.jsx"
import { CartProvider } from "./Components/Cart/CartProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <PosterProvider>
          <GenreProvider>
            {/* Theme Provider for style values */}
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {/* BrowserRouter for route handling */}
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </GenreProvider>
        </PosterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
)
