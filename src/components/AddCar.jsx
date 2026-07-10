import React from 'react'
import NavBar from './NavBar'

const AddCar = () => {
    return (
        <div>
            <NavBar/>
            <div className="container py-5">
                <div className="row">
                    <div className="text-center pb-4">

                        <h2
                            className="fw-bold"
                            style={{ color: "#1E3A8A" }}
                        >
                            Welcome to Car Rental Service
                        </h2>

                        <p
                            className="text-muted"
                            style={{ fontSize: "16px" }}
                        >
                            Add a new car and manage rental records efficiently
                        </p>

                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Car ID</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Model</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-label">Fule Type</label>
                                <select class="form-select">
                                    <option selected>Select </option>
                                    <option value="">Petrol</option>
                                    <option value="">Diesel</option>
                                    <option value="">Electric</option>
                                    <option value="">Hybrid</option>
                                </select>
                            </div>

                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label class="form-label">Transmission</label>
                                <select class="form-select">
                                    <option selected>Select </option>
                                    <option value="">Manual</option>
                                    <option value="">Automatic</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Price</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Colour</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Manufacturing Year</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Image URL</label>
                                <input type="url" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="" className='form-control'></textarea>
                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center mt-4">
                                <button className="btn px-5 fw-semibold"
                                    style={{
                                        backgroundColor: "#1E3A8A",
                                        color: "white",
                                        borderRadius: "10px",
                                        border: "none",
                                    }}>Sumbit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCar