import React from 'react'
import './marketTransactions.css'
import { EnterSVG} from '../../../assets/svg/icons'
import Hair from '../../../assets/images/hair.png'

const marketTransactions = () => {
  return (
    <div className='EscrowTodayTransaction'>
    <div className='EscrowWrapper'>
      <div className='EscrowTransactionLeft'>
        <div className='EscrowTransactionLeftWrapper'>
          <div className='ETTopRow'>
            <p className='ETTopRowHeader'>Today Transactions</p>
            <div className='ETFilter'>
                  <div className='ETTopFilter'>
                      <p className='ETTopFilterTitle'>Filter by date</p>
                      <input className='ETTopFilterinput' placeholder='DD/MM/YY'/>
                      <div className='ETTopTiltertEnterContainer'> 
                        <p className='ETTopFilterEnterIcon'><EnterSVG/></p>
                        <p className='ETTopFilterEnterText'>Enter</p>
                      </div>
                    </div>
            </div>
          </div>
          <div className='EscrowUsersTable'>
            <div className='EscrowUsersTableWrapper'>
              <div className='EscrowItem1'>
                <p className='EscrowSellerName'><span className='EscrowItemNameSpan'>Kemi Olushina</span> ordered from <span className='EscrowItemNameSpan'>Fola Johnson</span></p>
                <img src={Hair} alt='' className='EscrowTransactionItem'/>
                <p className='EscrowItemName ItemCategory'>Woman Hair</p>
                <p className='EscrowItemName'>Kemiipay23456</p>
                <p className='EscrowItemName green'>Payment completed</p>
                <p className='EscrowItemAmount green'>#100,000</p>
              </div>
              <div className='horizontalLine'></div>
              <div className='EscrowItem1'>
                <p className='EscrowSellerName'><span className='EscrowItemNameSpan'>Kemi Olushina</span> ordered from <span className='EscrowItemNameSpan'>Fola Johnson</span></p>
                <img src={Hair} alt='' className='EscrowTransactionItem'/>
                <p className='EscrowItemName ItemCategory'>Woman Hair</p>
                <p className='EscrowItemName'>Kemiipay23456</p>
                <p className='EscrowItemName green'>Payment completed</p>
                <p className='EscrowItemAmount green'>#100,000</p>
              </div>
              <div className='horizontalLine'></div>
              <div className='EscrowItem1'>
                <p className='EscrowSellerName'><span className='EscrowItemNameSpan'>Kemi Olushina</span> ordered from <span className='EscrowItemNameSpan'>Fola Johnson</span></p>
                <img src={Hair} alt='' className='EscrowTransactionItem'/>
                <p className='EscrowItemName ItemCategory'>Woman Hair</p>
                <p className='EscrowItemName'>Kemiipay23456</p>
                <p className='EscrowItemName green'>Payment completed</p>
                <p className='EscrowItemAmount green'>#100,000</p>
              </div>
              <div className='horizontalLine'></div>
              <div className='totalSale'>
                <p className='totalSaleHeader'>TOTAL SALE</p>
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
              <p className='ETRTopRowHeader'>Escrow Monthly Transactions</p>
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

export default marketTransactions