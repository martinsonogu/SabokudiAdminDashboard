import React from 'react'
import "./payment.css"

import { PaymentGatewayBigSVG,  TrendingUpBigSVG, EnterSVG } from '../../../assets/svg/icons'


const payment = () => {
  return (
    <div className='payment'>
        <div className='paymentWrapper'>
            <div className='paymentLeft'>
              <div className='paymentLeftWrapper'>
                <p className='paymentTitle'>Payment</p>
                <table className="table">
                  <tbody>
                    <tr className="tableTr1">
                      <th className="tableTh">Name</th>
                      <th className="tableTh">Payment purpose</th>
                      <th className="tableTh">Amount</th>
                      <th className="tableTh">Date</th>
                    </tr>
                    <tr className="TableTr">
                      <td className="tableText tableName">Shubomi Emmanuel</td>
                      <td className="tableText">Women Hair</td>
                      <td className="tableText green">#50,000.00</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Omolola Alakao</td>
                      <td className="tableText">Transfer to GTB</td>
                      <td className="tableText red">#200,000.00 DB</td>
                      <td className="tableText">12/10/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Setemib Ezekiel</td>
                      <td className="tableText">Sent from IPAY</td>
                      <td className="tableText green">#200,000.00 CR</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Olufunmi Jacob</td>
                      <td className="tableText">Women cloth</td>
                      <td className="tableText green">#20,000.00</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Deborah Ayoola</td>
                      <td className="tableText">Men cloth</td>
                      <td className="tableText green">#20,000.00</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Philip Shetimma</td>
                      <td className="tableText">Men Shoe</td>
                      <td className="tableText green">#20,000.00</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Hakeem Moyosore </td>
                      <td className="tableText">Women Hair</td>
                      <td className="tableText green">#20,000.00</td>
                      <td className="tableText">12/9/2022</td>
                    </tr> 
                    <tr className="TableTr">
                      <td className="tableText tableName">Emmanuel James</td>
                      <td className="tableText">Women bag</td>
                      <td className="tableText green">#20,000.00</td>
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
                  <PaymentGatewayBigSVG/>
                  <div className='topSegmentRight'>
                    <p className='topSegmentRightText'>Payment Gateway</p>
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
                <p className='bottomTitle'>Total amount  of payment  for <span className='month'>JULY</span> </p>
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

export default payment