import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ICTApp from './ICT.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ICTApp />
  </StrictMode>
)