import React from 'react'
import "./subscription.css"

import { UserSubBigSVG,  TrendingDownBigSVG, EnterSVG } from '../../../assets/svg/icons'


const subscription = () => {
  return (
    <div className='payment'>
        <div className='paymentWrapper'>
            <div className='paymentLeft'>
              <div className='paymentLeftWrapper'>
                <p className='paymentTitle'>Subscription</p>
                <table className="table">
                  <tbody>
                    <tr className="tableTr1">
                      <th className="tableTh">Name</th>
                      <th className="tableTh">PhoneNumber</th>
                      <th className="tableTh">Duration</th>
                      <th className="tableTh">Amount</th>
                      <th className="tableTh">Date</th>
                    </tr>
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">08096600554</td>
                      <td className="tableText">6 months</td>
                      <td className='tableText'>#1,000</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    
                   </tbody>
                </table> 
              </div>

            </div>
            {/*Note: for some reasons, the payment right container is not correctly lined up as the payment right. 
            There is a negative margibn Top for payment Right which should not be*/
            }
            <div className='paymentRight'>
              <div className='paymentRightWrapper'>
              <div className='paymentGateway'>
              <div className='paymentGatewayWrapper'> 
                <div className='topSegment'>
                  <UserSubBigSVG/>
                  <div className='topSegmentRight'>
                    <p className='topSegmentRightText'>User subscriptions</p>
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
                    <TrendingDownBigSVG/>
                  </div>
                </div>

              </div>
              
              </div>
            <div className='paymentRightBottom'>
                <p className='bottomTitle'>Total amount  of payment  for <span className='month'>MAY</span> </p>
                <div className='litleFilter'>
                  <p className='filterTitle'>Filter by date</p>
                  < input className='input' placeholder='DD/MM/YY'/>
                  <div className='enterContainer'> 
                    <p><EnterSVG/></p>
                    <p className='enterText'>Enter</p>
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

export default subscription