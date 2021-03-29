import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import 'tailwindcss/tailwind.css'
import {ThemeProvider} from 'styled-components'

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle/>
      </ThemeProvider>
    )

}

export default MyApp
