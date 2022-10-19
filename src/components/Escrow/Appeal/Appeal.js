import React from 'react'
import './Appeal.css'
import { EnterSVG} from '../../../assets/svg/icons'
const Due = () => {
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
            <div className='ETTopTabs'>
              <p className='ETTopTab2'>Escrow Users</p>
              <p className='ETTopTab1'>Due Users</p>
              <p className='ETTopTab2'>Appeal Users</p>
            </div>
            <div className='EscrowUsersTable'>
              <div className='EscrowUsersTableWrapper'>
                <div className='EscrowItem1'>
                  <p className='EscrowItemName'>Shobowale Michael</p>
                  <p className='EscrowItemName'>#5000.00</p>
                  <p className='EscrowItemName'>08067676767</p>
                  <p className='EscrowItemName'>NIN</p>
                </div>
              </div>
            </div>
            <p className='appealShare purple'>Share a file</p>
            <p className='appealMessage'>“ I bought an item from  Remi shotire and she has not delivered the item up till date”</p>
            <div className='uploadDocumentContainer'>
                <div className='container1'>
                    <p className='containerText'>Document</p>
                </div>
                <div className='container2'>
                  <p className='containerText'>Reciept</p>
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

export default Due