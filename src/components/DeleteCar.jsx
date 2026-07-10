import React from 'react'
import NavBar from './NavBar'

const DeleteCar = () => {
  return (
    <div>
        <NavBar/>
        <div className="container mt-5">
                <div className="row rounded-4 p-5 border-dark-subtle shadow">
                    <h2 className="fw-bold pb-3 text-center" style={{ color: "#1E3A8A" }}>
                        Remove Car Record
                    </h2>
                    <p className="text-muted text-center">
                        Delete car details securely from the portal
                    </p>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg 12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Car ID</label>
                                <input type="text" className="form-control w-64" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg 12 col-xl-12 col-xxl-12">
                                <button
                                    className="btn px-5 fw-semibold"
                                    style={{
                                        backgroundColor: "#1E3A8A",
                                        color: "white",
                                        borderRadius: "8px",
                                        border: "none",
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DeleteCar