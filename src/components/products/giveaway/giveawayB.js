import React from 'react'
import "./giveawayB.css"
import {EnterSVG, TrendingUpBigSVG, GiveawaySVG } from '../../../assets/svg/icons'


const giveaway = () => {
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
                        <p className='option2'>Overall Users</p>
                        <p className='option1'>Applications</p>
                    </div>
            <table className="table">
              <tbody>
                <tr className="TableBodyTr">
                  <th className="tableheader">Name</th>
                  <th className="tableheader">Uploads</th>
                  <th className="tableheader">date</th>
                </tr> 
                
                <tr className="tableBodyTr">
                  <td className="tableText">Ajani Ayemo <span className='tableTextDetails'>see details</span></td>
                  <td className="tableText">#5,000</td>
                  <td className="tableText">12/9/2022</td>
                </tr> 
                
               </tbody>
            </table>
                    

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
                <p className='header general'>General</p>
                <p className='header'>Follower</p>
                <p className='header'>Contact</p>
                <p className='header'>Customer</p>
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

export default giveaway