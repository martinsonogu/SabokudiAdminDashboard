import React from 'react'
import "./todayOrder.css"
import {EnterSVG, OrdergraphSVG} from '../../../assets/svg/icons'
import Kitchen from "../../../assets/images/kitchen.png"
import Hair from "../../../assets/images/hair.png"
const todayOrder = () => {
  return (
    <div className='giveaway'>
        <div className='giveawayWrapper'>
            <div className='giveawayLeft'>
                <div className='giveawayLeftWrapper'>
                    <div className='litleFilter'>
                            <p className='filterTitle'>Filter by name</p>
                            < input className='input' placeholder='Name'/>
                            <div className='enterContainer'> 
                                <p><EnterSVG/></p>
                                <p className='enterText'>Enter</p>
                            </div>
                    </div>
                    <div className='topRow'>
                        <p className='title'>Today Order</p>
                        <div className='options'>
                            <p className='option1'>Overall Order</p>
                            <p className='option2'>Order status</p>
                        </div>
                    </div>
                    <div className='mainContent'>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Kitchen} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status'>Delivery in progress</p>
                            
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Hair} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status green'>Delivered</p>
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Hair} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status red'>Not Delivered</p>
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Kitchen} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status'>Delivered  green</p>
                            
                        </div>
                        
                    </div>
                    
            
                    

                </div>

            </div>
            <div className='giveawayRight'>
                <div className='giveawayrightWrapper'>
                    <div>
                        <OrdergraphSVG/>
                    </div>
                    <div className='bottomContainer'>
                        <div className='bottomContainerWrapper'>
                            <div className='botConTopRow'>
                                <p className='botConTopRowTitle'>Order Confirmation</p>
                                <p className='botConTopRowAppeal'>Appeal</p>
                            </div>
                        <div className='bottomMainContent'>
                            <div className='bottomMainContentWrapper'>
                                <div className='contentA'>
                                    <p className='conName'>Kemi Olushina</p>
                                    <div className='imgDiv'>
                                        <img src={Kitchen} alt='' className='conImage'/>
                                        <p className='conProdCategory'>Woman Hair</p>
                                    </div>
                                    <p className='conAmount'>#100,000</p>
                                    <p className='conStatus'>Confirmed</p>
                                    <p className='conApprove'>Approve Fund</p>
                                </div>
                                <div className='horizontalLine'></div>
                                <div className='contentA'>
                                    <p className='conName'>Kemi Olushina</p>
                                    <div className='imgDiv'>
                                        <img src={Kitchen} alt='' className='conImage'/>
                                        <p className='conProdCategory'>Woman Hair</p>
                                    </div>
                                    <p className='conAmount'>#100,000</p>
                                    <p className='conStatus'>Confirmed</p>
                                    <p className='conApprove'>Approve Fund</p>
                                </div>
                                <div className='horizontalLine'></div>
                                <div className='contentA'>
                                    <p className='conName'>Kemi Olushina</p>
                                    <div className='imgDiv'>
                                        <img src={Kitchen} alt='' className='conImage'/>
                                        <p className='conProdCategory'>Woman Hair</p>
                                    </div>
                                    <p className='conAmount'>#100,000</p>
                                    <p className='conStatus'>Confirmed</p>
                                    <p className='conApprove'>Approve Fund</p>
                                </div>
                                <div className='horizontalLine'></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                </div>

        </div>
        </div>
    </div>
  )
}

export default todayOrder