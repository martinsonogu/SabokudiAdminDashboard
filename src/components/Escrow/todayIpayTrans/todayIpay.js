import React from 'react'
import './todayIpay.css'
import { EnterSVG} from '../../../assets/svg/icons'
import Chart from "../profits/Chart"

const todayIpay = () => {
  return (
    <div className='IPEscrowTodayTransaction'>
    <div className='IPEscrowWrapper'>
      <div className='IPEscrowTransactionLeft'>
        <div className='IPEscrowTransactionLeftWrapper'>
          <div className='IPETTopRow'>
            <p className='IPETTopRowHeader'>Today IPAY Transactions</p>
            <div className='IPETFilter'>
                  <div className='IPETTopFilter'>
                      <p className='IPETTopFilterTitle'>Filter by date</p>
                      <input className='IPETTopFilterinput' placeholder='DD/MM/YY'/>
                      <div className='IPETTopTiltertEnterContainer'> 
                        <p className='IPETTopFilterEnterIcon'><EnterSVG/></p>
                        <p className='IPETTopFilterEnterText'>Enter</p>
                      </div>
                    </div>
            </div>
          </div>
          <div className='IPEscrowUsersTable'>
            <div className='EscrowUsersTableWrapper'>
              <div className='IpayTransactionHeader'>
                <p className='IpayTransHeader1'>Name</p>
                <p className='IpayTransHeader1 red'>Debit</p>
                <p className='IpayTransHeader1 green'>Credit</p>
              </div>
              <div className='IpayTransactionEntries'>
                <p className='ITEntriesName'>Ademoye Rachel AdeIPAY0022<br/> <span className='boldSpan'>To</span> <br/>
                    Bemekun Taiwo BemeIPAY3458
                </p>
                <p className='ITEntriesName red '>#5,000</p>
                <p className='ITEntriesCredit'></p>
              </div>
              <div className='horizontalLine'></div>
              <div className='IpayTransactionEntries'>
                <p className='ITEntriesName'>Ademoye Rachel AdeIPAY0022<br/> <span className='boldSpan'>To</span> <br/>
                    Bemekun Taiwo BemeIPAY3458
                </p>
                <p className='ITEntriesName red '></p>
                <p className='ITEntriesCredit'>#5,000</p>
              </div>
              <div className='horizontalLine'></div>
              
             
              <div className='totalSale'>
                <div>
                    <p className='totalSaleHeader'>TOTAL Transactions</p>
                    <p className='totalSaleDate'>Today 12th/09/2022</p>
                </div>
                <p className='totalSaleAmount'>#500,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='EscrowTransactionRight'>
        <div className='EscrowTransactionRightTop'>
          <div className='EscrowTransactionRightTopWrapper'>
            <div className='ETRTopRow'>
              <p className='ETRTopRowHeader'>Ipay Monthly Transactions</p>
              <div className='EscrowTransactionRightFilter'>
                  <div className='ETRTopFilter'>
                      <input className='ETRTopFilterinput' placeholder='DD/MM/YY'/>
                      <div className='ETRTopTiltertEnterContainer'> 
                        <p className='ETRTopFilterEnterIcon'><EnterSVG/></p>
                        <p className='ETRTopFilterEnterText'>Enter</p>
                      </div>
                    </div>
            </div>
            </div>
            <div className='IpayETChart'>
              <Chart/>
            </div>
          </div>
        </div>
        <div className='EscrowTransactionRightBottom'>
          <div className='EscrowTransactionRightBottomWrapper'>
            <div className='EscrowTransactionRightBottomTopRow'>
              <p className='ETRBottomHeader'>Escrow monthly profit</p>
              <div className='ETRBFilter'>
                  <div className='ETRBottomFilter'>
                      <input className='ETRBFilterinput' placeholder='DD/MM/YY'/>
                      <div className='ETRBTiltertEnterContainer'> 
                        <p className='ETRBFilterEnterIcon'><EnterSVG/></p>
                        <p className='ETRBFilterEnterText'>Enter</p>
                      </div>
                    </div>
              </div>

            </div>
            <p className='ETRBMonth'>January 2022</p>
            <p className='ETRBAmount'>#5,000.00</p>
            <div className='ETRBBottomContainer'>
              <div className='ETRBBottomLeft'>
                <p className='ETRBBottomLeftText'>Previous</p>
                <p className='ETRBBottomLeftAmount'>#10,000.00</p>
              </div>
              <div className='ETRBBottomRight'>
                <p className='ETRBBottomLeftText'>Difference</p>
                <p className='ETRBBottomLeftDiffAmount'>#10,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  </div>
  )
}

export default todayIpay