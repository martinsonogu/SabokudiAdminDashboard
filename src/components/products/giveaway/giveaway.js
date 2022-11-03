import React,{useState} from 'react'
import "./giveaway.css"
import {EnterSVG, TrendingUpBigSVG, GiveawaySVG } from '../../../assets/svg/icons'
import Overallusers from '../giveaway/giveawayOverallUsers/overallusers'
import Applications from '../giveaway/giveawayApplications/applications' 


const Giveaway = () => {
  const [isActive, setIsActive] = useState('OverallUsers')
  const [isGiveawayTypeActive, SetIsGiveawayTypeActive] = useState('General')
  //Just as you have created state for the isActive, you would need to repeat a similar process for 
  // The Kind of Giveaway i.e either General, follower, customer or contact
  return (
    <div className='giveaway'>
        <div className='giveawayWrapper'>
            <div className='giveawayLeft'>
                <div className='giveawayLeftWrapper'>
                    <div className='topRow'>
                        <p className='paymentTitle'>Giveaway</p>
                        <div className='litleFilter'>
                            <p className='filterTitle'>Filter by date</p>
                            < input className='input' placeholder='DD/MM/YY'/>
                            <div className='enterContainer'> 
                                <p><EnterSVG/></p>
                                <p className='enterText'>Enter</p>
                            </div>
                        </div>
                    </div>
                    <div className='secondRow'>
                        <button className='option1' onClick={() => setIsActive("OverallUsers")}>Overall Users</button>
                        <button className='option2' onClick={() => setIsActive("Applications")}>Applications</button>
                    </div>
            <div className='changingContent'></div>
                {isActive === "OverallUsers" && <Overallusers/>}
                {isActive === "Applications" && <Applications/>}
                </div>

            </div>
            <div className='giveawayRight'>
                <div className='giveawayrightWrapper'>
                <div className='paymentGateway'>
              <div className='paymentGatewayWrapper'> 
                <div className='topSegment'>
                  <GiveawaySVG/>
                  <div className='topSegmentRight'>
                    <p className='topSegmentRightText'>Total Uploads</p>
                    <p className='topSegmentRightAmount'>#52,000.00</p>
                  </div>
                </div>
                <div className='bottomSegment'>
                  <div className='bottomSegmentA'>
                    <p className='bottomSegmentAText'>Previous</p>
                    <p className='bottomSegmentAAmount'>#40,000.00</p>
                  </div>
                  <div className='bottomSegmentB'>
                    <p className='bottomSegmentAText'>Changes</p>
                    <p className='bottomSegmentBAmount'>#12,000.00</p>
                  </div>
                  <div className='bottomSegmentC'>
                    <p className='bottomSegmentCText'>Trend</p>
                    <TrendingUpBigSVG/>
                  </div>
                </div>

              </div>
              
              </div>
              <div className='giveawaytype'>
              <button className='header general' onClick={() => SetIsGiveawayTypeActive("General")}>General</button>
              <button className='header' onClick={() => SetIsGiveawayTypeActive("Follower")}>Follower</button>
              <button className='header' onClick={() => SetIsGiveawayTypeActive("Contact")}>Contact</button>
              <button className='header' onClick={() => SetIsGiveawayTypeActive("Customer")}>Customer</button>
              </div>
              <div className='paymentRightBottom'>
                <p className='bottomTitle'>Total amount  of payment  for <span className='month'>APR</span> </p>
                <div className='bigFilter'>
                  <p className='bigfilterTitle'>Filter by date</p>
                  < input className='filterinput' placeholder='DD/MM/YY'/>
                  <div className='enterContainerFilter'> 
                    <p><EnterSVG/></p>
                    <p className='entText'>Enter</p>
                  </div>
                </div>
                <p className='Total'>Total</p>
                <div style={{'border-bottom': '1px solid #E4E4E4'}}></div>
                <p className='totalAmount'>#235,000.00</p>
                <div style={{'border-bottom': '1px solid #E4E4E4'}}></div>
              </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Giveaway