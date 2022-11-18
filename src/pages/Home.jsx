import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

export const HomePage = () => {
    return (
        <>
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

            <h1 className="Welcome_txt">Welcome to the page, where we can help create your individual CV.</h1>
            <Link to="/fields" className="Welcome_btn">
                START
            </Link>
        </div>
        </>
    )
}