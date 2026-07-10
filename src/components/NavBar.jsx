import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav
            className="navbar navbar-expand-lg shadow-sm sticky-top"
            style={{ backgroundColor: "#1E3A8A" }}
        >
            <div className="container">

                <a
                    className="navbar-brand d-flex align-items-center"
                    href="/"
                >

                    <span
                        className="fw-bold fs-3"
                        style={{ color: "#FFFFFF" }}
                    >
                        Rental Cars
                    </span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ borderColor: "#DBEAFE" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">

                        <a
                            className="nav-link fw-semibold mx-2"
                            href="/"
                            style={{ color: "#FFFFFF" }}
                        >
                            Add
                        </a>

                        <a
                            className="nav-link fw-semibold mx-2"
                            href="/search"
                            style={{ color: "#FFFFFF" }}
                        >
                            Search 
                        </a>

                        <a
                            className="nav-link fw-semibold mx-2"
                            href="/delete"
                            style={{ color: "#FFFFFF" }}
                        >
                            Delete 
                        </a>

                        <a
                            className="nav-link fw-semibold mx-2"
                            href="/viewall"
                            style={{ color: "#FFFFFF" }}
                        >
                            Car Records
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar