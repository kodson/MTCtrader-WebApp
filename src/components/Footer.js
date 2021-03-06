import React, { useState, useEffect } from 'react';  
import  { useNavigate, Link } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();
    const [reviewHandle, setReviewHandel] = useState("");
    const [forecastHandle, setForecastHandle] = useState("");

    


function logout(){


        //window.localStorage.removeItem('@isLogin'); 
        window.localStorage.clear();
        navigate("/");
        window.location.reload(true);
    

} 

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <Link to="/marketreview" className="nav-link active">
                                <span>
                                    <i className="nav-icon bi bi-book 3x"></i>
                                    <span className="nav-text">Update</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/forecast" className="nav-link active" >
                                <span>
                                    <i className="nav-icon bi bi-binoculars"></i>
                                    <span className="nav-text">Forecast</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item centerbutton">
                            <button type="button" className="nav-link active" data-bs-toggle="modal" data-bs-target="#menumodal"
                                id="centermenubtn">
                                <span className="theme-radial-gradient">
                                    <i className="bi bi-grid size-22"></i>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to="/marketfund" className="nav-link active" >
                                <span>
                                    <i className="nav-icon bi bi-bag"></i>
                                    <span className="nav-text">MTC Fund</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <a href="https://t.me/mtcforecasting"  className="nav-link active" >
                                <span className='avatar avatar-40 icon'>
                                    <i className="bi bi-telegram"></i>
                                    <span className="nav-text">Circle</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
