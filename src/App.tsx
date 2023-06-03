import { useEffect, useMemo } from 'react'
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
import { Cart } from './components/Cart'
import { Drawer } from './components/Dawer'
import { useAppSelector } from './store/hooks.ts'

// @ts-ignore
const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            background: {
              paper: 'hsl(0, 0%, 16%)',
              default: 'hsl(0, 0%, 12%)'
            }
          }
        : {
            background: {
              paper: '#fff',
              default: 'hsl(0, 0%, 99%)'
            }
          })
    },
    typography: {
      body1: {
        lineHeight: 'initial',
        letterSpacing: 'initial'
      }
    }
  }
}

function App() {
  const { mode } = useAppSelector((state) => state.theme)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

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

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [mode])

  return (
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
      <Cart />
      <Drawer />
    </ThemeProvider>
  )
}

export default App
