import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        navigate("/")
    }
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
                                    to="/Displaybackend"
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
                                    <span className="nav-link">Upload</span>
                                </Link>
                            </li>
                        </ul>
                        <p className="navbar-text" onClick={logout}>Log-out</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar