import React from 'react'
import "./review.css"

import { UserReviewBigSVG,  TrendingUpBigSVG, EnterSVG } from '../../../assets/svg/icons'


const review = () => {
  return (
    <div className='payment'>
        <div className='paymentWrapper'>
            <div className='paymentLeft'>
              <div className='paymentLeftWrapper'>
                <p className='paymentTitle'>Reviews</p>
                <table className="table">
                  <tbody>
                    <tr className="tableTr1">
                      <th className="tableTh">Name</th>
                      <th className="tableTh">Email</th>
                      <th className="tableTh">Review</th>
                      <th className="tableTh">Date</th>
                    </tr>
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Good</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Good</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Good</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Bad</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Good</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Bad</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Good</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Shubomi@gmail.com</td>
                      <td className="tableText green">Bad  </td>
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
                  <UserReviewBigSVG/>
                  <div className='topSegmentRight'>
                    <p className='topSegmentRightText'>Users review</p>
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
            <div className='paymentRightBottom'>
                <p className='bottomTitle'>Total amount  of payment  for <span className='month'>JAN</span> </p>
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
                <p className='totalAmount'>#5,000.00</p>
                <div style={{'border-bottom': '1px solid #E4E4E4'}}></div>
              </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default review