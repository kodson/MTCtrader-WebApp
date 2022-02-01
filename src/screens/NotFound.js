
import React from 'react'; 
import  { Link } from "react-router-dom";
const NotFound = () => {
 return (
    <>
       <main className="container-fluid h-100 ">
        <div className="row h-100">
            <div className="col-11 col-sm-11 mx-auto">
                
                <div className="row">
                    <header className="header">
                        <div className="row">
                            <div className="col">
                                <div className="logo-small">
                                    <img src="assets/img/logo.png" alt="" />
                                    <h5><span className="text-secondary fw-light">MTC</span><br />trader</h5>
                                </div>
                            </div>
                            <div className="col-auto align-self-center">
                                
                            </div>
                        </div>
                    </header>
                </div>
                 
            </div>
            <div className="col-12 align-self-center pb-3">
                <div className="row h-100">
                    <div className="col-12 px-0 align-self-center">
                        <div className="row mx-0">
                            <div className="col-ld-6 position-relative thankyouimg2">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="341.488" height="309.4" viewBox="0 0 341.488 309.4" className="bg404bg">
                                    <defs>
                                      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#09b2fd"/>
                                        <stop offset="1" stop-color="#6b00e5"/>
                                      </linearGradient>
                                    </defs>
                                    <path id="verficationbg" d="M692.351,321.27c55.785,40.634,22.728,98.486,66.116,115.7s70.616-63.289,147.384-70.248,62.673-84.023,16.027-119.57-8.366-66.884-51.151-93.738-78.652,25.674-102.343,0-69.835-30.495-100.827-13.266-48.9,40.623-48.9,81.256C621.414,273.06,662.736,291.655,692.351,321.27Z" transform="translate(-618.659 -129.981)" fill="url(#linear-gradient)"/>
                                  </svg>
                                  
                                  
                                  
                                <div className="text">ERROR</div>
                                <div className="circle small one"></div>
                                <div className="circle two"></div>
                                <div className="circle small three"></div>                                              
                                <img src="assets/img/404.svg" alt="" className="slideimg404" />
                            </div>
                            <div className="col-11 col-md-8 col-lg-4  col-ld-6 mx-auto">
                                <h1 className="mb-4"><span className="text-secondary fw-light">Error</span><br/>404</h1>
                                <p className="text-secondary">Page your are looking for is not available. Kindly check URL or try after sometime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-11 col-sm-11 mt-auto mx-auto py-4">
                <div className="row ">
                    <div className="col-12 d-grid">
                        <a href="/" className="btn btn-default btn-lg shadow-sm">Back Home</a>
                    </div>
                </div>
            </div>
        </div>
    </main>


    </>

    
  );
};

export default NotFound;
