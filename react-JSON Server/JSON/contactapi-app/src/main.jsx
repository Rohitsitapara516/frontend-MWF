import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import ManageContact from './ContactManage'
import WelcomeApp from './WelcomeApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <Routes>

    <Route path='/' element={<Contact />} />
    <Route path="/welcome" element={<WelcomeApp />} />
    <Route path="/manage-contact" element={<ManageContact />} />
    </Routes>
  </Router>
  </StrictMode>,
)
