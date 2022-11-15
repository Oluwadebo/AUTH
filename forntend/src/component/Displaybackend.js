import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";

const Displaybackend = () => {
    const [todos, settodos] = useState([])
    const [user, setuser] = useState([])
    const [userId, setuserId] = useState('')
    const token = localStorage.token
    useEffect(() => {
        axios.get("http://localhost:5007/dashboard",
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            }).then((data) => {
                setuser(data.data.result[0]);
                localStorage.userId = data.data.result[0]._id
                setuserId(data.data.result[0]._id)
            })
        axios.get("http://localhost:4000/gettodo").then(
            (data) => {
                settodos(data.data.result[0]);
            }
        ).catch()
    }, [])
    const delet = (val) => {
        console.log(val);
        axios.post("http://localhost:4000/del", { id: val }).then((data) => { })
        window.location.reload()
    };
    const edit = () => {

    }
    console.log(todos);
    return (
        <>
            <Navbar />
            <center>
                <h2 className="my-3">STAFF PROFILE</h2>
            </center>
            <div className="container">
                <div class="row">
                    {/* {todos.map((item, index) => (
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
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
            {/* <div className="container">
                <div className="table-responsive">
                    <table className="table table-success table-striped shadow table-bordered">
                        <tr>
                            <th><h3 className="px-5">S/N</h3></th>
                            <th><h3 className="px-5">FIRSTNAME</h3></th>
                            <th><h3 className="px-5">LASTNAME</h3></th>
                            <th><h3 className="px-5">SCHOOL</h3></th>
                            <th colspan="2"><h3 className="px-5">ACTIONS</h3></th>
                        </tr>
                        {todos.map((item, index) => (
                            <tr key={index} >
                                <td><p className='px-5'>{index + 1}</p></td>
                                <td><p className='px-5'>{item.firstname}</p></td>
                                <td><p className='px-5'>{item.lastname}</p></td>
                                <td><p className='px-5'>{item.school}</p></td>
                                <td>
                                    <img src={item.file} alt="images" className="img-fluid" />
                                </td>
                                <td><p className='px-5 fa fa-edit clo py-3' name="id" onClick={() => edit(item._id)}></p></td>
                                <td><p className='px-5 fa fa-trash colo py-3' onClick={() => delet(item._id)}></p></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div> */}
        </>
    )
}

export default Displaybackend