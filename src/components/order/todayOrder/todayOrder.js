import React,{useState} from 'react'
import "./todayOrder.css"
import {EnterSVG, OrdergraphSVG} from '../../../assets/svg/icons'
import Kitchen from "../../../assets/images/kitchen.png"
import DeliveryStatus from './deliveryStatusTab/deliveryStatus'
import OverallStatus from './overallStatusTab/overallStatus'
const TodayOrder = () => {
    const [isActiveTab, setIsActiveTab] = useState("DeliveryStatus")
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
                            <button className='option1' onClick={() => setIsActiveTab("DeliveryStatus")}>Overall Order</button>
                            <button className='option2' onClick={() => setIsActiveTab("OverallStatus")}>Order status</button>
                        </div>
                    </div>
                    <div className='mainContent'>
                        {isActiveTab === "DeliveryStatus" && <DeliveryStatus/>}
                        {isActiveTab === "OverallStatus" && <OverallStatus/>  }                    
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

export default TodayOrder