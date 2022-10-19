import React from 'react'
import './totalUpload.css'
import {EnterSVG, TrendingUpBigSVG, UploadsSVG } from '../../../assets/svg/icons'
import itemUploaded from "../../../assets/images/itemUploaded.png"

const totalUpload = () => {
  return (
    <div>
      <div className='totalUploads'>
    <div className='paymentWrapper'>
        <div className='paymentLeft'>
          <div className='paymentLeftWrapper'>
            <div className='TopRow'>
              <p className='paymentTitle'>Total Uploads</p>
              <div className='litleFilter'>
              <p className='filterTitle'>Filter by date</p>
              < input className='input' placeholder='DD/MM/YY'/>
              <div className='enterContainer'> 
                <p><EnterSVG/></p>
                <p className='enterText'>Enter</p>
              </div>
            </div>
            </div>
            
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <th className="tableheader">Name</th>
                  <th className="tableheader">Item Uploaded</th>
                  <th className="tableheader">Section</th>
                  <th className="tableheader">date</th>
                </tr> 
                
                <tr className="TableTr">
                  <td className="tableText">Ajani Ayemo</td>
                  <td className="tableText">
                    <img src={itemUploaded} className='itemUploaded' alt=''/>
                  </td>
                  <td className="tableText">Video</td>
                  <td className="tableText">12/9/2022</td>
                </tr> 
                <tr className="TableTr">
                  <td className="tableText">Ajani Ayemo</td>
                  <td className="tableText">
                    <img src={itemUploaded} className='itemUploaded' alt=''/>
                  </td>
                  <td className="tableText">Image</td>
                  <td className="tableText">12/9/2022</td>
                </tr> 
                <tr className="TableTr">
                  <td className="tableText">Ajani Ayemo</td>
                  <td className="tableText">
                    <img src={itemUploaded} className='itemUploaded' alt=''/>
                  </td>
                  <td className="tableText">Video</td>
                  <td className="tableText">12/9/2022</td>
                </tr> 
                <tr className="TableTr">
                  <td className="tableText">Ajani Ayemo</td>
                  <td className="tableText">
                    <img src={itemUploaded} className='itemUploaded' alt=''/>
                  </td>
                  <td className="tableText">Image</td>
                  <td className="tableText">12/9/2022</td>
                </tr> 
                <tr className="TableTr">
                  <td className="tableText">Ajani Ayemo</td>
                  <td className="tableText">
                    <img src={itemUploaded} className='itemUploaded' alt=''/>
                  </td>
                  <td className="tableText">Video</td>
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
                  <UploadsSVG/>
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
            <div className='paymentRightBottom'>
                <p className='bottomTitle'>Total amount  of payment  for <span className='month'>APR</span> </p>
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

</div></div>
  )
}

export default totalUpload