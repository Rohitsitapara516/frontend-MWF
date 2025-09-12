import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeToggle from './component/Themetoggel'
import  ThemeContext  from './component/Themecontext'
import ThemedBox from './component/Themebox'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
