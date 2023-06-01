import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Header'
import { Drawer } from './components/Dawer'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const theme = createTheme({})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Drawer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
