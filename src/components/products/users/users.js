import React from 'react'
import './users.css'
import { TopRatedSVG, EnterSVG } from '../../../assets/svg/icons'
import orderedImg from "../../../assets/images/orderedItem.png"

const users = () => {
  return (
    <div className='user'>
    <div className='paymentWrapper'>
        <div className='paymentLeft'>
          <div className='paymentLeftWrapper'>
            <div className='ProductTopRow'>
              <p className='paymentTitle'>List of Users</p>
              <div className='litleFilter'>
              <p className='filterTitle'>Filter by date</p>
              < input className='input' placeholder='DD/MM/YY'/>
              <div className='enterContainer'> 
                <p><EnterSVG/></p>
                <p className='enterText'>Enter</p>
              </div>
            </div>

            </div>
            <div className='secondRow'>
              <p className='item1'>Overall users</p>
              <p className='item2'>Marketers</p>
              <p className='item2'>Services</p>
              <p className='item2'>Giveaway</p>
            </div>
            
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
            <table className="table">
              <tbody>
                <tr className="TableTr">
                  <td className="tableText">Shobawale Michael</td>
                  <td className="tableText">Shubomi@gmail.com</td>
                  <td className="tableText">09087878787</td>
                  <td className="tableText">Nin</td>
                  <td className="tableText green">Registered</td>
                </tr> 
               </tbody>
            </table> 
            <div className='verticalLine'></div>
          </div>

        </div>
        {/*Note: for some reasons, the payment right container is not correctly lined up as the payment right. 
        There is a negative margibn Top for payment Right which should not be*/
        }
        <div className='usersPRight'>
          <div className='userspaymentRightWrapper'>
            <div className='topRatedProductsWrapper'>
              <div className='topRatedProduct'>
                <div className='topWrapper'>
                  <div  className='topSection'>
                    <p className='topSectionIcon'><TopRatedSVG/></p>
                    <div>
                      <p className='topSectionTitle'>Top rated product</p>
                      <p className='topSectionAmount'>#52,000.000</p>
                    </div>
                  </div>
                  <p className='likes'>Likes</p>
                  <p className='topSectionLastParagraph'>
                  Women clothes from Lola Alao
                  </p>
                  

                </div>

              </div>
            </div>
            <div className='productOrdered'>
              <div className='productOrderedWrapper'>
                <p className='productOrderedHeader'>Top product ordered</p>
                <div className='orderedItems'>
                  <div className='orderedItemsWrapper'>
                    <img src={orderedImg} alt='' className='orderedItemImg'/>
                    <p className='productCategory'>Woman Hair</p>
                    <p className='amount'>#500,000.000</p>
                    <p className='sales'>Sales</p>
                  </div>
                  <div className='verticalLine'></div>


                </div>
                {// Two
                }
              <div className='orderedItems'>
                  <div className='orderedItemsWrapper'>
                    <img src={orderedImg} alt='' className='orderedItemImg'/>
                    <p className='productCategory'>Woman Hair</p>
                    <p className='amount'>#500,000.000</p>
                    <p className='sales'>Sales</p>
                  </div>
                  <div className='verticalLine'></div>
                </div>
                {//Three
                }
                <div className='orderedItems'>
                  <div className='orderedItemsWrapper'>
                    <img src={orderedImg} alt='' className='orderedItemImg'/>
                    <p className='productCategory'>Woman Hair</p>
                    <p className='amount'>#500,000.000</p>
                    <p className='sales'>Sales</p>
                  </div>
                  <div className='verticalLine'></div>
                </div>
              </div>

            </div>
          
          </div>
        </div>
    </div>

</div>
  )
}

export default users