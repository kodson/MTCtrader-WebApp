import React, {useEffect, useState} from 'react'; 
import  { Link } from "react-router-dom"; 
import  Modal  from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {SendRequest, Myalert} from "../helpers";
import LoadWrapper from "./LoadWrapper"; 
import urllink from "../constant/urllink";  

const MarketFundAssetList = (props) => {

    const [market, setMarket] = useState(false); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);
    const walletBalance = JSON.parse(window.localStorage.getItem("@wallet")) * 1;
    const [insureTrade, setInsureTrade] = useState(0);
    const [investAmount, setInvestAmount] = useState(0);
    const [message, setMessage] = useState('');
    const [toggleAlert, setToggleAlert] = useState(false);
    const [showProcess, setShowProcess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [assetList, setAssetList] = useState(props.list);
    useEffect(() => {

        refresh();
         
    }, []);
 
function refresh(){

         //get cashback sellers list
        let requestData = {
            url: urllink.marketfundmyasset,
            user_id: JSON.parse(window.localStorage.getItem("@userId")),
            page: 1
        }
        
        setIsLoading(true);
        SendRequest(requestData)
        .then(function (res){
            if(res.error){
    
               return false;
    
            }else{

                setAssetList(res.assets);
                setIsLoading(false);
                
  
                
            }
         
    
         }).catch((e) => {
               
            setIsLoading(false);
                
            return false;
    
         })
     
    
    }


 function showModal (item){
    setMarket(item);
    setToggleAlert(false);
    setShow(true)
     

 }

 function insure(e) {

    let amount = investAmount * 0.05;
    if(e === true){
        setInsureTrade(amount);
 
    }else{
        setInsureTrade(0);
    }


 }

 function investTrade(){

    let amount = investAmount * 1;
    let amountToInsure = insureTrade * 1;
    if(amount < 3){
        setMessage('Sorry, minimum of USD3');
        setToggleAlert(true);
        return false;
        
    }
    let total = amount + amountToInsure;

    if(total > walletBalance){

        setMessage('Wallet balance is low');
        setToggleAlert(true);
        
        return false;
    }


    setShowProcess(true);
    setToggleAlert(false);
    setMessage('');

    let requestData = {
        url: urllink.marketfundInvest,
        user_id: JSON.parse(window.localStorage.getItem("@userId")),
        asset_id: market.asset_id,
        amount: amount,
        insure: amountToInsure,

        
    }

    SendRequest(requestData)
        .then(function (res){
            if(res.error){
    

                setShowProcess(false);
                setMessage(res.message);
                setToggleAlert(true);
            
               return false;
    
            }else{
  
                handleClose();
                
                setMessage(res.message);
                //update the balance
                 
                let wallet = JSON.stringify(res.balance);
                 
                window.localStorage.setItem('@wallet', wallet);
                refresh();
                setShowProcess(false);
                setToggleAlert(true);

   
                
            }
         
    
         }).catch((e) => {
            
                setShowProcess(false);
                setMessage('Sorry, unable to processing at this time, please again later');
                setToggleAlert(true);
   
    
         })
    
    



 }    

 return (
    <>
           
                <div className="main-container container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="card shadow-sm mb-4">
                                        <div className="card-header" style={{ textAlign: 'center' }}>
                                            <h6 className="my-1">My Assets</h6>
                                            <p>

                                                <Link to="/marketfund">Open Asset</Link> | 
                                                <span className='text-muted'> My Potfolio </span>
                                                | <Link to="/marketfund/passive"> Passive Asset</Link>
                                            </p>
                                             
                                        </div>
                                        <div className="card-body bg-light">

                                        <Myalert message={message} toggle={ toggleAlert} /> 

                                        {
                                            isLoading === true ?<>
                                            <p>
                                                loading...
                                            </p>
                                            </>:<>
                                                <ul className="list-group list-group-flush w-100 bubble-sheet log-information">

                                                    {

                                                        
                                                        assetList !== null ? 
                                                                                                                
                                                            assetList.map((function(item) {
                                                            
                                                                 return (
                                                                            <>
                                                                            
                                                                            <li key={item.asset_id} className="list-group-item"> 

                                                                            <div className="avatar avatar-15 border-success rounded-circle"></div>
                                                                                <p>
                                                                                    <span className="text-color-theme">ASSET : {item.title} </span>
                                                                                        <br/>
                                                                                    <small className="text-muted" style={{textAlign: "left"}}> Amount Invested: USD{item.total_stake}</small><br/>
                                                                                    
                                                                                    <small className="text-muted">Insured: {item.is_insured} </small>  <br/>
                                                                                    
                                                                                    {
                                                                                    item.status === "passive" ?<>
                                                                                    <button className="btn btn-primary btn-sm shadow-sm" onClick={() => showModal(item)}>Withdraw</button>
                                                                                
                                                                                    </>:<></>
                                                                                    }
                                                                                
                                                                                </p>

                                                                            </li>
                                                                            
                                                                            </>
                                                                        )
                                                                
                                                                }))

                                                        : <>
                                                            <li className="list-group-item"> 
                                                                <p>
                                                                    You currently has no asset at the moment
                                                                </p>
                                                            </li>
                                                        </>
                                                    }
                                                </ul>

                                            </>
                                        }
                                           

                                        </div>
                                        
                                    </div>
                                </div>
                                

                            </div>
                </div>


                <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>
                                <b> {market.asset} | 
                                    <small className="" style={{textAlign: "left", color: "red"}}> 
                                        {market.remaining_days} days left
                                    </small>
                                </b> 
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            
                            <li key={market.asset_id} className="list-group-item"> 

                                <div className="avatar avatar-15 border-success rounded-circle"></div>
                                    <div style={{ textAlign: "center" }}>
                                        <b className="text-muted">Started On:</b>
                                        <br/>
                                        <b style={{ color: "blue" }}>{market.start_date}</b> <br/>
                                        
                                        <b className="text-muted">Total Invested: </b>
                                        <br/>
                                        <b style={{ color: "blue" }}>USD{market.total_stake}</b> 
                                        <br/>
                                        <b className="text-muted">Total Investor:</b>
                                        <br/>
                                        <b style={{ color: "blue" }}>{market.total_number_of_stakers}</b>  <br/>
                                        <hr/>
                                        Trade Status: <b>{market.status}</b>
                                        <hr/>
                                            Your Last Invested <b>{market.last_invested}</b>
                                        <hr/>
                                            Stake Holding (%) <b> {market.last_stake} </b>
                                        <hr/> 
                                            Wallet <b> USD{walletBalance - investAmount - insureTrade} </b>
                                        <hr/>
                                        <h5>Invest</h5>
                                        <div className="form-group form-floating mb-3">
                                            <input type="number" className="form-control" onChange={e => setInvestAmount(e.target.value)}  placeholder="Enter Amount" />
                                            <label className="form-control-label">Amount</label>
                                        </div>
                                        <div className="form-group form-floating mb-3">
                                            <h5>Insure Trade</h5>
                                            {
                                                market.last_insure > 0 ? <>
                                                <input type="radio" name="insure" onChange={() => insure(true)} checked />Yes (5%) 
                                            
                                                </>:<>
                                                <input type="radio" name="insure" onChange={() => insure(true)} checked/>No | 
                                                
                                                </>
                                            }
                                            {
                                                market.last_invested === 0 ? <>
                                                <input type="radio" name="insure" onChange={() => insure(true)} />Yes (5%) | 
                                                <input type="radio" name="insure" onChange={() => insure(false)} checked />No  
                                                </>:<></>
                                            }
                                            

                                            
                                            <br/>
                                            <button onClick={() => console.log('Insurance')}>What is insurance?</button>
                                            <br/>
                                            
                                        </div>


                                        <div className="  d-grid">
                                        <Myalert message={message} toggle={ toggleAlert} /> 
                            
                                                {  
                                                    !showProcess ? 
                                                    <>
                                                        <button className='btn btn-success' onClick={() => investTrade()}>Invest Now</button> 
                                                        <br/>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                    </> :  <> 
                                                    <LoadWrapper msg="Investing..."/>
                                                     </>
                                                }
                                                
                                        </div>
                                        
                                    </div>

                            </li>

                            </Modal.Body>
                             
                </Modal>      
                                                      

 
     </>
 );
}

export default MarketFundAssetList;
