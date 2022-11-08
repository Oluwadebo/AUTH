import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand">Anthony</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className='stye'
                                >
                                    <span className="nav-link active">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Todo"
                                    className='stye'
                                >
                                    <span className="nav-link">New-user</span>
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text"> The lord is good. </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar