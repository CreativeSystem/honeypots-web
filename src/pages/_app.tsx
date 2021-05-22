import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { AuthContextProvider } from "@/contexts/AuthContext"
import GlobalStyle from "@/styles/global"
import { light } from "@/styles/theme"
import { StylesProvider } from "@material-ui/styles"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <StylesProvider injectFirst>
          <Component {...pageProps} />
          <GlobalStyle />
        </StylesProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
