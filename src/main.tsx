import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'boxicons/css/boxicons.min.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import './styles/index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
