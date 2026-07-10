import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const AllCars = () => {
    const [data, changeData] = useState([])

    const fetchData = () =>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        ()=>{
            fetchData()
        }, []
    )
    
  return (
    <div
            style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}
        >
            <NavBar/>
            <div className="container py-5">

                <h2
                    className="text-center fw-bold mb-5"
                    style={{ color: "#1E3A8A" }}
                >
                    Car Records
                </h2>


                <div className="row g-4">


                    {/* Car Card */}
                    {data.map(
                        (value, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card h-100 shadow">

                                        <img
                                            src= {value.image}
                                            className="card-img-top mx-auto mt-3"
                                            alt="Profile"
                                            style={{
                                                width: "100px",
                                                height: "100px"
                                            }}
                                        />

                                        <div className="card-body text-center">

                                            <h5 className="card-title fw-bold">
                                                {value.brand}
                                            </h5>

                                            <p className="card-text">
                                                <strong>Car Id:</strong> {value.carId}
                                                <br />
                                                <strong>Model:</strong> {value.model}
                                                <br />
                                                <strong>Price:</strong> {value.price}
                                                <br />
                                                <strong>Colour:</strong> {value.color}
                                                <br />
                                                <strong>Description:</strong> {value.description}
                                                <br />
                                            </p>

                                            <button
                                                className="btn w-100 fw-semibold"
                                                style={{
                                                    backgroundColor: "#1E3A8A",
                                                    color: "white",
                                                    borderRadius: "8px",
                                                    border: "none"
                                                }}
                                            >
                                                View Details
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    )}

                </div>

            </div>

        </div>
  )
}

export default AllCars