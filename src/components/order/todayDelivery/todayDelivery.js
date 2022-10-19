import React from 'react'
import "./todayDelivery.css"
import {EnterSVG, TrendingUpSVG, UploadsSmallSVG} from '../../../assets/svg/icons'
import Kitchen from "../../../assets/images/kitchen.png"
import Hair from "../../../assets/images/hair.png"

const todayDelivery = () => {
  return (
    <div className='giveaway'>
        <div className='giveawayWrapper'>
            <div className='giveawayLeft'>
                <div className='giveawayLeftWrapper'>
                    <div className='topRow'>
                        <p className='topRowTitle'>Today Delivery</p>
                        <div className='deliveryOptions'>
                            <p className='optionA'>Overall Delivery</p>
                            <p className='optionB'>Delivery Status</p>
                        </div>
                    </div>
                    <div className='header'>
                        <p className='head'>Name</p>
                        <p className='head'>Item</p>
                        <p className='head'>Amount</p>
                        <p className='head'>Location</p>
                        <p className='head'>Seller in Charge</p>
                    </div>
                    <div className='mainContentArea'>
                   <div className='todayDeliverymainContent'>
                            <p className='tdnames'><span className='tdname'>Kemi Olushina </span>ordered from <span className='tdname'>Fola Johnson</span></p>
                            <div className='tdImagGroup'>
                                <img src={Hair} alt='' className='tdimage'/>
                                 <p className='tdproductCategory'>Woman Hair</p>
                            </div>
                            <p className='tdamount'>#10,000</p>
                            <p className='tdLocation'>Abuja</p>
                            <p className='tdSeller'>Fola Johnson/ Logistic dealer</p>
                            
                    </div>
                    <div className='tdhorizontalLine'></div>
                    <div className='todayDeliverymainContent'>
                            <p className='tdnames'><span className='tdname'>Kemi Olushina </span>ordered from <span className='tdname'>Fola Johnson</span></p>
                            <div className='tdImagGroup'>
                                <img src={Hair} alt='' className='tdimage'/>
                                 <p className='tdproductCategory'>Woman Hair</p>
                            </div>
                            <p className='tdamount'>#10,000</p>
                            <p className='tdLocation'>Abuja</p>
                            <p className='tdSeller'>Fola Johnson/ Logistic dealer</p>
                            
                    </div>
                    <div className='tdhorizontalLine'></div>
                    <div className='todayDeliverymainContent'>
                            <p className='tdnames'><span className='tdname'>Kemi Olushina </span>ordered from <span className='tdname'>Fola Johnson</span></p>
                            <div className='tdImagGroup'>
                                <img src={Hair} alt='' className='tdimage'/>
                                 <p className='tdproductCategory'>Woman Hair</p>
                            </div>
                            <p className='tdamount'>#10,000</p>
                            <p className='tdLocation'>Abuja</p>
                            <p className='tdSeller'>Fola Johnson/ Logistic dealer</p>
                            
                    </div>
                    <div className='tdhorizontalLine'></div>
                    <div className='todayDeliverymainContent'>
                            <p className='tdnames'><span className='tdname'>Kemi Olushina </span>ordered from <span className='tdname'>Fola Johnson</span></p>
                            <div className='tdImagGroup'>
                                <img src={Hair} alt='' className='tdimage'/>
                                 <p className='tdproductCategory'>Woman Hair</p>
                            </div>
                            <p className='tdamount'>#10,000</p>
                            <p className='tdLocation'>Abuja</p>
                            <p className='tdSeller'>Fola Johnson/ Logistic dealer</p>
                            
                    </div>
                    <div className='tdhorizontalLine'></div>
                    </div>
                </div>

            </div>
            <div className='todayDeliveryRight'>
                <div className='tdTopContainer'>
                <div className='tdTopContainerWrapper'> 
                <div className='tdtopSegment'>
                  <UploadsSmallSVG/>
                  <div className='tdtopSegmentRight'>
                    <p className='tdtopSegmentRightText'>Payment Gateway</p>
                    <p className='tdtopSegmentRightAmount'>#52,000.00</p>
                  </div>
                </div>
                <div className='tdbottomSegment'>
                  <div className='tdbottomSegmentA'>
                    <p className='tdbottomSegmentAText'>Previous</p>
                    <p className='tdbottomSegmentAAmount'>#40,000.00</p>
                  </div>
                  <div className='tdbottomSegmentB'>
                    <p className='tdbottomSegmentBText'>Changes</p>
                    <p className='tdbottomSegmentBAmount'>#12,000.00</p>
                  </div>
                  <div className='tdbottomSegmentC'>
                    <p className='tdbottomSegmentCText'>Trend</p>
                    <TrendingUpSVG/>
                  </div>
                </div>

              </div>
                </div>
                <div className='tdTab'>
                    <p className='tdTabOne active'>Delivery</p>
                    <p className='tdTabOne'>Location</p>
                    <p className='tdTabOne'>Success</p>
                </div>
                <p className='tdDesc'>Total amount  of delivery for  <span className='tdSpan'>JUNE</span></p>
                <div className='tdlitleFilter'>
                  <p className='tdfilterTitle'>Filter by date</p>
                  < input className='tdinput' placeholder='DD/MM/YY'/>
                  <div className='tdenterContainer'> 
                    <p><EnterSVG/></p>
                    <p className='tdenterText'>Enter</p>
                  </div>
                </div>
                <p className='tdTotal'>Total</p>
                <div style={{'border-bottom': '1px solid #E4E4E4'}}></div>
                <p className='tdtotalAmount'>#235,000.00</p>
                <div style={{'border-bottom': '1px solid #E4E4E4'}}></div>
              
        </div>
        </div>
    </div>
  )
}

export default todayDelivery