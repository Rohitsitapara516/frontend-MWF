import React from "react";
import AdminHeader from "./components/Admin/AdminHeader";
import AdminSidebar from "./components/Admin/AdminSidebar";
import Dashboard from "./components/Admin/Dashboard";
import AdminFooter from "./components/Admin/AdminFooter";

export default function AdminLayout(){
    return(
        <>
        
        <AdminHeader />
        <section id="dashboard-content">
            <div className="container-fluid m-0 p-0">
                <div className="row">
                 <AdminSidebar />
                 <Dashboard />
                 <AdminFooter />
                </div>
            </div>
        </section>
        
        </>
    )
}