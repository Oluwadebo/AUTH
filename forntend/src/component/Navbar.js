import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "./endpoint";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState([])
    const [userId, setuserId] = useState('')
    const token = localStorage.token;
    useEffect(() => {
        if (token) {
            axios.get(`${baseUrl}dashboard`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    }
                }).then((data) => {
                    if (data) {
                        let Err = data.data.message;
                        if (Err == "Valid Token") {
                            setuser(data.data.result[0]);
                            localStorage.userId = data.data.result[0]._id
                            setuserId(data.data.result[0]._id)
                        } else {
                            localStorage.removeItem('token')
                            localStorage.removeItem('userId')
                            navigate("/")
                        }
                    }
                })
        } else {
            navigate("/")
        }
    }, [])
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        navigate("/")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand">
                        <h4>
                            Welcome <span className="naem">{user.firstname}</span>
                        </h4>
                    </a>
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="col-12 col-md-8 text-md-end">
                            <Link
                                to="/Dashboard"
                                className='text-black stye'
                            >
                                <span>
                                    <i className="fa fs-5 fa-dashboard mx-md-4 mx-3"> Home </i>
                                </span>
                            </Link>
                            <Link
                                to="/Upload"
                                className='text-black stye'
                            >
                                <span>
                                    <i className="fa fs-5 fa-address-card mx-md-4 mx-3"> Upload </i>
                                </span>
                            </Link>
                            <Link
                                to="/message"
                                className='text-black stye'
                            >
                                <span>
                                    <i className="fa fs-5 fa-envelope mx-md-4 mx-3"> Meessage </i>
                                </span>
                            </Link>
                            <span>
                                <i className="fa fs-5 fa-sign-out mx-md-4 mx-3 my-3 my-md-0 stye" onClick={logout}>Log-out</i>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar