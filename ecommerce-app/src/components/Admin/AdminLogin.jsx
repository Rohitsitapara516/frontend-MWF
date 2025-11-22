import React from "react";
import user from '../../assets/admin/images/user.webp'
export default function AdminLogin(){
    return(
        <>
        
        <div className="container m-0 p-0 mt-5 col-md-8 mx-auto shadow-lg">
            <div className="row">
              <div className="col-md-4 login-image">
                <img src={user} className="img-fluid" alt="user" />
              </div>

              <div className="col-md-8">
                <form name="frm" id="frm" encType="multipart/form-data" action="register.html">
                <h3 className="ms-5">Sing-in</h3>
                <div className="input-group border border-0 w-75 mx-auto mt-3">
                <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                 <input type="text" name="email" id="email" data-bvalidator="required,email"
                 placeholder="Email *" className="form-control border border-0 border-bottom border-dark" />
                </div>

                <div className="input-group border border-0 w-75 mx-auto mt-3">
                <span className="input-group-text border border-0"><i className="bi bi-lock"/></span>
                 <input type="text" name="password" id="password" data-bvalidator="required,email"
                 placeholder="Password *" className="form-control border border-0 border-bottom border-dark" />
                </div>

                <div className="input group border border-0 w-75 mx-auto mt-3">
                    <button type="button" name="login" className="btn btn-blocl m-0 p-0 w-100 mx-auto bg-dark text-white" onClick="lg()">{" "} Sing In</button>
                </div>

                <div className="input-group border border-0 w-75 mx-auto mt-3">
                    <p className="text-center">Like us On <i className="bi bi-facebook text-primary "/> <i className="bi bi-twitter text-primary"/> <i className="bi bi-google text-danger"/></p>

                </div>

                </form>

              </div>
            </div>
        </div>
        
        </>
    )
}