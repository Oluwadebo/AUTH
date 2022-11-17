import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
import { baseUrl, socket } from "./endpoint";

const Socket = () => {
    useEffect(() => {
        const firstname = "debo"
        socket.emit("send-user", firstname);
        socket.on("send-user", (res) => {
            console.log(res);
        })
    }, [])

    return (
        <>
            <Navbar />

        </>
    )
}

export default Socket