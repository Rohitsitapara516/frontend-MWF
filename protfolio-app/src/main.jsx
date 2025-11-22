import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import About from './component/About'
import Skill from './component/Skill'
import Project from './component/Project'
import Contact from './component/Contact'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
              <Route path="/" element={<Layout />} />
                <Route path="/about-us" element={<About />} />
                  <Route path="/skill" element={<Skill />} />
                   <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                      
      </Routes>
    </Router>
  </StrictMode>
)

