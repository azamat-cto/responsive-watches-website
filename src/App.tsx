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
import { useEffect } from 'react'

const theme = createTheme({
  typography: {
    body1: {
      lineHeight: 'initial',
      letterSpacing: 'initial'
    }
  }
})

function App() {
  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    if (scrollUp) {
      window.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollUp)

    return () => {
      window.removeEventListener('scroll', scrollUp)
    }
  }, [])

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
        <button
          className="scrollup"
          id="scroll-up"
          onClick={() => window.scrollTo(0, 0)}
        >
          <i className="bx bx-up-arrow-alt scrollup__icon"></i>
        </button>
        <Drawer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
