import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import "./home.css"
import Navbar from "../../components/navbar/navbar"
import FirstDisplay from "../../components/firstdisplay/firstdisplay"
import Payment from "../../components/dashboard/payments/payment"
import Subscription from "../../components/dashboard/subscriptions/subcription"
import Review from "../../components/dashboard/reviews/review"
import Product from "../../components/products/users/users"
import TotalUploads from "../../components/products/totalUploads/totalUpload"
import Giveaway from "../../components/products/giveaway/giveaway"
import TodayOrder from "../../components/order/todayOrder/todayOrder"
import TodayDelivery from "../../components/order/todayDelivery/todayDelivery"
import OrderInbox from '../../components/order/orderInbox/orderInbox'
import PaymentTransaction from '../../components/payments/paymentTransactionsInitial/paymentTransaction'
import OtherBank from '../../components/payments/otherBanks/otherBank'
import EscrowTransaction from '../../components/Escrow/EscrowTransactions/todayTransaction'
import Due from '../../components/Escrow/Due/Due'
import Appeal from '../../components/Escrow/Appeal/Appeal'
import MarketTransactions from '../../components/Escrow/marketTransactions/marketTransactions'
import TodayIpayTransaction from '../../components/Escrow/todayIpayTrans/todayIpay'
import Profit from '../../components/Escrow/profits/profit'
import Chart from '../../components/Escrow/profits/Chart'
import Iptransaction from '../../components/Escrow/todayIpayTrans/todayIpay'

const home = () => {
  return (
    
      <div className='home'>
        <Navbar/>
        <Routes>    
        <Route exact path="/" element = {<FirstDisplay />}/>
        <Route path="/payment" element = {<Payment />}/>
        <Route path="/products" element = {<Product />}/>
        <Route path="/order" element = {<TodayOrder />}/>
        <Route path="/paymentTransaction" element = {<PaymentTransaction />}/>
        <Route path="/EscrowTransaction" element = {<EscrowTransaction />}/>
        <Route path="/profit" element = {<Profit />}/>
        <Route path="/Iptransaction" element = {<Iptransaction />}/>
        </Routes>

      </div>
    
  )
}

export default home