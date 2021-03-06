import React, {useEffect, useState}  from "react"; 
import BalanceBoard from "../components/BalanceBoard"; 
import Header from "../components/Header";
import MarketFundList from "../components/MarketFundList";
//import  { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal";
//import {SendRequest, Myalert} from "../helpers";
//import urllink from "../constant/urllink";  
const MarketFund = () => {
 
    
 
    

 return (
    <>
     <section className="body-scroll" data-page=""  style={{ marginBottom: "80px" }}>
            
                    <main className="h-100">

                       <Header title="Market Fund"/>
                        <div  style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                           
                           <MarketFundList list={[]}/>

                        </div>


                    </main>

            <Footer />  
            <QuickLinkModal />  
     </section>
    </>
 );
}

export default MarketFund;
