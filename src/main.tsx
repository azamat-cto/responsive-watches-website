import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import 'boxicons/css/boxicons.min.css'
import 'react-multi-carousel/lib/styles.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import './styles/index.scss'


const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
