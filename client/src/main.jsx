import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StateProvider } from './Context/StateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StateProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </StateProvider>
)
