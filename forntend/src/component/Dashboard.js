import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
import { baseUrl } from "./endpoint";

const Dashboard = () => {
    const navigate = useNavigate();
    const [todos, settodos] = useState([])
    const token = localStorage.token;
    useEffect(() => {
        if (token) {
            axios.get(`${baseUrl}gettodo`).then(
                (data) => {
                    settodos(data.data.result);
                }
            )
        } else {
            navigate("/")
        }
    }, [])
    const delet = (val) => {
        axios.post(`${baseUrl}del`, { id: val }).then((data) => { })
        window.location.reload()
    };
    const edit = (val) => {
        console.log(val);
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div class="row">
                    {todos.map((item, index) => (
                        <div
                            class="col-12 col-md-4 product-top my-2 mx-0 mx-md-2 mt-md-0 card shadow"
                        >
                            <img
                                src={item.file}
                                class="img-fluid h-75 w-100 my-2"
                            />
                            <div className="row">
                                <div className="col-12 mx-auto">
                                    <h4>Fullname: {item.firstname} {item.lastname}</h4>
                                    <h4>School: {item.school}</h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className='px-5 fa fa-edit clo py-3' name="id" onClick={() => edit(item._id)}></p>
                                        </div>
                                        <div className="col-6">
                                            <p className='px-5 fa fa-trash colo py-3' name="id" onClick={() => delet(item._id)}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard