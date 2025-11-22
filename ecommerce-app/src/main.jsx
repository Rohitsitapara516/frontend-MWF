import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css';
import './assets/admin/css/style.css';
import App from "./App"

//admin panel
import AdminLogin from './components/Admin/AdminLogin'
import AdminLayout from './AdminLayout'
import AdminCategory from './components/Admin/AddCategory'
import AddProducts from './components/Admin/AddProducts'
import ManageCategory from './components/Admin/ManageCategory'
import AddSubCategory from './components/Admin/AddSubCategory'
import ManageSubCategory from './components/Admin/ManageSubCategory'
import DeleteCategory from './components/Admin/DeleteCategory'
import EditCategory from './components/Admin/EditCategory'
import DeleteSubCategory from './components/Admin/DeleteSubCategory'
import ManageProducts from './components/Admin/ManageProducts'

//user panel
import Layout from './Layout'
import Contact from './components/Contact'
import Products from './components/Products'
import Register from './components/Register'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import EditProducts from './components/Admin/EditProducts'
import DeleteCart from './components/DeleteCart'
import Checkout from './components/Checkout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          
           {/* Admin login route */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-login/admin-dashboard" element={<AdminLayout />} />
          <Route path="/admin-login/add-category" element={<AdminCategory />} />
          <Route path="/admin-login/add-products" element={<AddProducts />} />
          <Route path="/admin-login/manage-category" element={<ManageCategory />} />
          <Route path="/admin-login/add-Subcategory" element={<AddSubCategory />} />
          <Route path="/admin-login/manage-subcategory" element={<ManageSubCategory />} />
          <Route path="/admin-login/delete-category/:id" element={<DeleteCategory />} />
          <Route path="/admin-login/edit-category/:id" element={<EditCategory />} />
          <Route path="/admin-login/delete-subcategory/:id" element={<DeleteSubCategory />} />
          <Route path="/admin-login/manage-products" element={<ManageProducts />} />
          <Route path="/admin-login/edit-products/:id" element={<EditProducts />} />
       
       


               {/* user login route */}
                <Route path="/" element={<Layout />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/view-cart" element={<Cart />} /> 
                <Route path="/delete-cart/:id" element={<DeleteCart />} />   
                <Route path="/checkout-here" element={<Checkout />} />                  

                        

                        



      </Routes>
    </Router>
  </StrictMode>,
)
