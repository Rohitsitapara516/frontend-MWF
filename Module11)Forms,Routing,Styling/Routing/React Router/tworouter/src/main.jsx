import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import layout from './layout'
import Home from './component/Home'
import About from './component/About'



createRoot(document.getElementById('root')).render(

  <StrictMode>
  <Router>
    <Routes>

     <Route path='/' element={<layout/>}/>
     
     <Route path='/' element={<Home/>}/>

     <Route path='/' element={<About/>}/>


    </Routes>

  </Router>


</StrictMode>,

)