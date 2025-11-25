import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//admin panel
import Login from './components/admin/Login'
import AdminLayout from './AdminLayout'
import ManageCustomers from './components/admin/ManageCustomers'
import AddCategory from './components/admin/AddCategory'
import AddFruits from './components/admin/AddFruits'

//user panel
import Layout from './Layout'
import ContactUs from './components/customer/pages/ContactUs'
import About from './components/customer/pages/About'
import Account from './components/customer/pages/Account'
import Products from './components/customer/pages/Products'
import ForgetPassword from './components/customer/pages/ForgetPassword'
import Register from './components/customer/pages/Register'
import CartApp from './components/customer/pages/CartApp'
import ProductDetails from './components/customer/pages/ProductsDetails'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          {/* admin panel routing */}
     <Route path="/admin-login" element={<Login />} />
      <Route path="/admin-login/dashboard" element={<AdminLayout />} />
       <Route path="/admin-login/manage-customers" element={<ManageCustomers />} />
         <Route path="/admin-login/add-category" element={<AddCategory />} />
            <Route path="/admin-login/add-fruits" element={<AddFruits />} />

               {/* user panel routing */}
               <Route path="/" element={<Layout />} />
                <Route path="/contact-us" element={<ContactUs />} />
                 <Route path="/about-us" element={<About />} />
                   <Route path="/create-account" element={<Account />} />
                   <Route path="/products" element={<Products />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                      <Route path="/register" element={<Register />} />
                       <Route path="/cart" element={<CartApp />} />
                         <Route path="/pages/productdetails" element={<ProductDetails />} />
                    
                    

      </Routes>
    </Router>
  </StrictMode>
)
