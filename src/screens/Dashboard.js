import React, {useEffect, useState} from "react"; 
import  { useNavigate, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import QuickLinkModal from "../components/QuickLinkModal";
import DashboardHeader from "../components/DashboardHeader"; 
import TransactionList from "../components/TransactionList";
import CryptoList from "../components/CryptoList";
import Banner from "../components/Banner";
import MarketReviewList from "../components/MarketReviewList";
import BalanceBoard from "../components/BalanceBoard";
import mainJs from "../jquery/mainJs";
var numeral = require('numeral');


const Dashboard = () => {

  const navigate = useNavigate();
  
  const [fullname, setFullname] = useState("");
   
  const [totalBalance, setTotalBalance] = useState(0);
  const [phone, setPhone] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [transList, setTransList] = useState([]);
  const [reviewList, setReviewList] = useState([]);


 useEffect(() => {

     
		document.title = `MTCtrader - Wallet`;  
        let value = window.localStorage.getItem("@isLogin");

        if(value !== "true"){
            navigate("/"); 
        }

        mainJs();
        

        if(fullname == ""){
             
            setFullname(window.localStorage.getItem("@name"));
            setPhone(JSON.parse(window.localStorage.getItem("@phone")));
            let walletBalance = JSON.parse(window.localStorage.getItem("@wallet")) * 1;
            let gasBalance = JSON.parse(window.localStorage.getItem("@gas")) * 1;
            let cryptolist = JSON.parse(window.localStorage.getItem("@cryptolist"));
            setCryptoList(cryptolist);
            let translist = JSON.parse(window.localStorage.getItem("@transList"));
            setTransList(translist);
            let reviewlist = JSON.parse(window.localStorage.getItem("@reviewsList"));
            setReviewList(reviewlist);
            let totalbalane = gasBalance + walletBalance;
            setTotalBalance(totalbalane);
        }

        



        
	  
});





 return (
    <>
        <section data-page="dashboard">

                     
                   {
                       //<LoadWrapper  msg="Preparing your wallet..."/>
                   } 
                    <div className="body-scroll" >
                        <Nav fullname={fullname} phone={phone}/>
                        <main className="h-100" style={{ marginBottom: "60px" }}>
                                <DashboardHeader fullname={fullname} phone={phone}/>
                                <div className="main-container container"  style={{ marginTop: "80px" }}>
                                
                                    <div className="row my-4 text-center">
                                        <div className="col-12">
                                            <h1 className="fw-light mb-2">$ {numeral(totalBalance).format('0.000')}</h1>
                                            <p className="text-secondary">Total Balance</p>
                                        </div>
                                    </div>

                                    
                                     <BalanceBoard />
  

                                   
                                   <CryptoList cryptos={cryptoList}/>
                                
                     
                                  <Banner />
                                
                                   
                                  
                                    <TransactionList trans={transList} />
                                  
                                    <MarketReviewList reviews={reviewList} />
                                
                                   

                                </div>
                    


                        </main>
                        <Footer />
                        <QuickLinkModal />
                    </div>

        </section>

    </>
 );
}

export default Dashboard;
