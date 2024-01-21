import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Components/Providers/AuthProvider.jsx"
import { CartProvider } from "./Components/Providers/CartProvider.jsx"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./Styled/Global.style.js"
import { theme } from "./Styled/Theme.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        {/* Theme Provider for style values */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* BrowserRouter for route handling */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
)
