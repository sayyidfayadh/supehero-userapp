import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TokenAuth from './Auth/Auth.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <TokenAuth>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </TokenAuth>
  </StrictMode>,
)
