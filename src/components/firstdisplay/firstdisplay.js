import React from 'react'
import './firstdisplay.css'
import Img from '../../assets/images/salesmanagerimg.png'
import { PaymentGatewaySVG, UserSubSVG, RegUsersSVG, UserReviewSVG, TrendingUpSVG, TrendingDownSVG } from '../../assets/svg/icons'

const firstdisplay = () => {
  return (
    <div className='mainContainer'>
        <div className='transactionContainer'>
          <div className='fTransactionWrapper'>
            <div className='FpaymentGateway'>
              <div className='FpaymentGatewayWrapper'> 
                <div className='FtopSegment'>
                  <PaymentGatewaySVG/>
                  <div className='FtopSegmentRight'>
                    <p className='FtopSegmentRightText'>Payment Gateway</p>
                    <p className='FtopSegmentRightAmount'>#52,000.00</p>
                  </div>
                </div>
                <div className='FbottomSegment'>
                  <div className='FbottomSegmentA'>
                    <p className='FbottomSegmentAText'>Previous</p>
                    <p className='FbottomSegmentAAmount'>#40,000.00</p>
                  </div>
                  <div className='FbottomSegmentB'>
                    <p className='FbottomSegmentAText'>Changes</p>
                    <p className='FbottomSegmentBAmount'>#12,000.00</p>
                  </div>
                  <div className='FbottomSegmentC'>
                    <p className='FbottomSegmentCText'>Trend</p>
                    <TrendingUpSVG/>
                  </div>
                </div>

              </div>
              
            </div>
            {//column 2
            }
            <div className='FpaymentGateway'>
              <div className='FpaymentGatewayWrapper'> 
                <div className='FtopSegment'>
                  <UserSubSVG/>
                  <div className='FtopSegmentRight'>
                    <p className='FtopSegmentRightText'>User Subscriptions</p>
                    <p className='FtopSegmentRightAmount'>#52,000.00</p>
                  </div>
                </div>
                <div className='FbottomSegment'>
                  <div className='FbottomSegmentA'>
                    <p className='FbottomSegmentAText'>Previous</p>
                    <p className='FbottomSegmentAAmount'>#40,000.00</p>
                  </div>
                  <div className='FbottomSegmentB'>
                    <p className='FbottomSegmentAText'>Changes</p>
                    <p className='FbottomSegmentBAmount'>#12,000.00</p>
                  </div>
                  <div className='FbottomSegmentC'>
                    <p className='FbottomSegmentCText'>Trend</p>
                    <TrendingUpSVG/>
                  </div>
                </div>

              </div>
              
            </div>
            {// column3
            }
            <div className='FpaymentGateway'>
              <div className='FpaymentGatewayWrapper'> 
                <div className='FtopSegment'>
                  <RegUsersSVG/>
                  <div className='FtopSegmentRight'>
                    <p className='FtopSegmentRightText'>Registered Users</p>
                    <p className='FtopSegmentRightAmount'>#52,000.00</p>
                  </div>
                </div>
                <div className='FbottomSegment'>
                  <div className='FbottomSegmentA'>
                    <p className='FbottomSegmentAText'>Previous</p>
                    <p className='FbottomSegmentAAmount'>#40,000.00</p>
                  </div>
                  <div className='FbottomSegmentB'>
                    <p className='FbottomSegmentAText'>Changes</p>
                    <p className='FbottomSegmentBAmount'>#12,000.00</p>
                  </div>
                  <div className='FbottomSegmentC'>
                    <p className='FbottomSegmentCText'>Trend</p>
                    <TrendingUpSVG/>
                  </div>
                </div>

              </div>
              
            </div>
            {//user Review
            }
            <div className='FpaymentGateway'>
              <div className='FpaymentGatewayWrapper'> 
                <div className='FtopSegment'>
                  <UserReviewSVG/>
                  <div className='FtopSegmentRight'>
                    <p className='FtopSegmentRightText'>Users Review</p>
                    <p className='FtopSegmentRightAmount'>#52,000.00</p>
                  </div>
                </div>
                <div className='FbottomSegment'>
                  <div className='FbottomSegmentA'>
                    <p className='FbottomSegmentAText'>Good</p>
                    <p className='FbottomSegmentAAmount'>#40,000.00</p>
                  </div>
                  <div className='FbottomSegmentB'>
                    <p className='FbottomSegmentAText'>Bad</p>
                    <p className='FbottomSegmentBAmount'>#12,000.00</p>
                  </div>
                  <div className='FbottomSegmentC'>
                    <p className='FbottomSegmentCText'>Trend</p>
                    <TrendingUpSVG/>
                  </div>
                </div>

              </div>
              
            </div>
          </div>

        </div>
        <div className='FgraphSection'>
          <div className='graphSectionWrapper'>
            <div className='firstContainer'>
              <div className='firstContainerHeader'>
                <p className='firstContainerHeader'>Order review</p>
              </div>
              
            </div>
            <div className='secondContainer'>
              <div className='one'>
                <div className='oneWrapper'>
                  <p className='oneHeader'>Frequently accessed section on the app </p>
                </div>
                
              </div>
              <div className='two'>
                <p className='twoHeader'>Sales Manager Ranking</p>
                <div className='twoSecondHeader'>
                  <p className='twoSecondHeaderName'>Manager name</p>
                  <p className='twoSecondHeaderName'>Rep name</p>
                  <p className='twoSecondHeaderName'>Registered user</p>
                  <p className='twoSecondHeaderName'>Revenue</p>
                </div>
                <div className='twoSecondEntriesContainer'>
                  <div className='VertLine'></div>
                  <div className='twoSecEntries'>
                    <img src={Img} alt='' className='twoSecImg'/>
                    <p className='twoSecEntryName'>Jabi Rahman</p>
                    <p className='twoSecEntryName'>Roy Loy</p>
                    <p className='twoSecEntryName'>234,000</p>
                    <p className='twoSecEntryName'>#50,000.000</p>
                  </div>
                  <div className='VertLine'></div>
                  <div className='twoSecEntries'>
                    <img src={Img} alt='' className='twoSecImg'/>
                    <p className='twoSecEntryName'>Jabi Rahman</p>
                    <p className='twoSecEntryName'>Roy Loy</p>
                    <p className='twoSecEntryName'>234,000</p>
                    <p className='twoSecEntryName'>#50,000.000</p>
                  </div>
                  <div className='VertLine'></div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
  )
}

export default firstdisplay