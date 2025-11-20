// External deps
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Local deps
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
