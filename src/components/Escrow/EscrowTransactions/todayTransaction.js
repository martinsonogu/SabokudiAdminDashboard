import React, {useState} from 'react'
import './todayTransaction.css'
import { EnterSVG} from '../../../assets/svg/icons'
import Chart from '../profits/Chart'
import Due from '../Due/Due'
import Appeal from '../Appeal/Appeal'
import Users from '../EscrowUsers/users'

const TodayTransaction = () => {
  const [isActiveTab, setIsActiveTab] = useState("Users")
  return (
    <div className='EscrowTodayTransaction'>
      <div className='EscrowWrapper'>
        <div className='EscrowTransactionLeft'>
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
            <div className='EscrowTransactionLeftWrapper'>
            <div className='ETTopTabs'>
              <button className='ETTopTab2' onClick={() => setIsActiveTab("Users")}>Escrow Users</button>
              <button className='ETTopTab2' onClick={() => setIsActiveTab("Due")}>Due Users</button>
              <button className='ETTopTab2' onClick={() => setIsActiveTab("Appeal")}>Appeal Users</button>
            </div>
            <div className='ETTopTransactionContent'>
              {isActiveTab === "Users" && <Users/>}
              {isActiveTab === "Appeal" && <Appeal/>}
              {isActiveTab === "Due" && <Due/>}
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
                <div className='TTChart'>
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

export default TodayTransaction