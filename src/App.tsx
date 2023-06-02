import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Featured } from './components/Featured'
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
        </main>
        <Drawer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
