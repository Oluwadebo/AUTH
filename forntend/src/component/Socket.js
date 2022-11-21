import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as yup from "yup";
import { useFormik } from "formik";
import Navbar from "./Navbar";
import { baseUrl, socket } from "./endpoint";

const Socket = () => {
    const [display, setdisplay] = useState("")
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            console.log(values.message);
            setdisplay(values.message)
            socket.emit("message", values.message);
            // socket.on("user-sent", (res) => {
            //     console.log(res);
            // })
        },
        validationSchema: yup.object({
            message: yup.string().required("This field is required"),
        }),
    });
    console.log(display);
    return (
        <>
            <Navbar />
            <div className="we">{display}</div>
            <div className="container fixed-bottom">
                <div className="col-12 col-md-12 mx-auto px-4 pb-3 asd">
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="form-floating mt-4">
                            <div className="row pt-3">
                                <div className="col-11">
                                    <input
                                        type="text"
                                        placeholder="Message"
                                        className={
                                            formik.errors.message && formik.touched.message
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="message"
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="col-1 px">
                                    <button
                                        type="submit"
                                        className="btn fa fa-send form-control noe"
                                    ></button>
                                </div>
                            </div>
                            {/* <input
                            type="message"
                            placeholder="Message"
                            className={
                                formik.errors.message && formik.touched.message
                                    ? "form-control is-invalid"
                                    : "form-control fa fa-send"
                            }
                            onChange={formik.handleChange}
                            style={{ backgroundColor: "#F5F7FA" }}
                            name="message"
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && (
                            <div style={{ color: "red" }} className="my-2">
                                {formik.errors.message}
                            </div>
                        )}
                        <label>Message</label>
                        <button
                            type="submit"
                            className="btn fa fa-send form-control asd"
                        ></button> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Socket