import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Featured } from './components/Featured'
import { Story } from './components/Story'
import { Products } from './components/Products'
import { Testimonials } from './components/Testimonials'
import { New } from './components/New'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { Drawer } from './components/Dawer'

const theme = createTheme({
  typography: {
    body1: {
      lineHeight: 'initial',
      letterSpacing: 'initial'
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main className="main">
          <Home />
          <Featured />
          <Story />
          <Products />
          <Testimonials />
          <New />
          <Newsletter />
        </main>
        <Footer />
        <Drawer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
