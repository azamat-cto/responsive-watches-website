import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Header'
import { Drawer } from './components/Dawer'

const theme = createTheme({})

function App() {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
    </ThemeProvider>
  )
}

export default App
