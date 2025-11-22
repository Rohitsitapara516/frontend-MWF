import React from "react";

export default function AdminFooter(){
    return(
        <>
        
        <div className="admin-footer bg-danger mt-2 p-5">
             <p>© 2025 Admin Panel | All Rights Reserved</p>
             </div>
            <div className="model fade" id="lg" role="dailog">
                <div className="modal-dailog">
                    <div className="midel-content p-4">
                     <h3>Are you sure to logout ?{" "}<button type="button" className="btn btn-sm btn-danger border border-0 ms-5"  data-bs-dismiss="modal">x</button></h3>
                    </div>

                     <p className="text-center mt-3">
    
                        <button
                        type="button"
                        id="btn1"
                        className="btn btn-sm btn-success text-white border border-0"
                       >
                     Ok
                     </button>
        
                       <button
                       type="button"
                       data-bs-dismiss="modal"
                       id="btn2"
                      className="btn btn-sm btn-danger text-white border border-0 ms-2"
                              >
                      Cancel
                   </button>
                   </p>

                </div>
            </div>
        
        </>
    )
}