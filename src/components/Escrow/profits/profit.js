import React from 'react'
import './profit.css'
import { EnterSVG} from '../../../assets/svg/icons'
import Chart from './Chart'

const profit = () => {
  return (
    <div className='EscrowTodayTransaction'>
    <div className='EscrowWrapper'>
      <div className='EscrowTransactionLeft'>
        <div className='EscrowTransactionLeftWrapper'>
          <div className='PETTopRow'>
            <p className='ETTopRowHeader'>PROFITS</p>
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
              <div className='profitsWrapper'>
                <div className='firstProfit'>
                    <p className='firstProfitHeader'>Ipay bank transactions</p>
                    <div className='chart'>
                      <Chart/>
                    </div>
                </div>
                <div className='firstProfit'>
                    <p className='firstProfitHeader'>Bank transactions</p>
                    <div className='chart'>
                      <Chart/>
                    </div>
                </div>
                <div className='firstProfit'>
                    <p className='firstProfitHeader'>Market ransactions</p>
                    <div className='chart'>
                      <Chart/>
                    </div>
                </div>
                <div className='firstProfit'>
                    <p className='firstProfitHeader'>Service transactions</p>
                    <div className='chart'>
                      <Chart/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  </div>
  )
}

export default profit