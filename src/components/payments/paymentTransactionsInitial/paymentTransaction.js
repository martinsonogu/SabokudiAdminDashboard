import React, {useState} from 'react'
import './paymentTransaction.css'
import { CircularRoundsSVG, EnterSVG, IpaySmall, PTGraphSVG } from '../../../assets/svg/icons'
import PaymentTransactionTab from '../paymentTransactionTab/paymentTransaction'
import ServicesTransactionTab from '../servicesTransactionTab/serviceTransaction'
import AppPayment from '../appPayment/appPayment'
import OtherBanks from '../otherBanks/otherBank'

const PaymentTransaction = () => {
    const [isActive, setIsActive] = useState("MarketTransaction")
    const [isActiveAside, setIsActiveAside] =useState("AppPayment")
  return (
    <div className='paymentTransaction'>
        <div className='paymentTransactionWrapper'> 
            <div className='paymentTransactionLeft'>
                <div className='paymentTransactionLeftUp'>
                    <div className='PTLeftUpOne'>
                        <div className='PTLeftUpOneWrapper'> 
                            <div className='PTLeftUpOneTopRow'>
                                <p className='PTLeftUpOneTopRowHeader'>Payment Transaction</p>
                                <div className='PTLeftUpOneTopRowFilter'>
                                    <div className='PTLeftFilter'>
                                    <p className='PTLeftfilterTitle'>Filter by date</p>
                                    < input className='PTLeftinput' placeholder='DD/MM/YY'/>
                                    <div className='PTLeftEnterContainer'> 
                                        <p className='PTLeftEnterIcon'><EnterSVG/></p>
                                        <p className='PTLeftEnterText'>Enter</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='PTLeftUpOneSecondItem'>
                                <div className='PTLeftUpOneSecondItemWrapper'>
                                    <div className='PTLeftUpOneSecondItemTpRow'>
                                        <p className='PTLeftUpOneSecondItemTitle'>Availabale Balance</p>
                                        <p className='PTLeftUpOneSecondItemIcon'> <IpaySmall/></p>
                                    </div>
                                    <p className='PTLeftUpOneSecondItemTotal'>#200,000,000.00</p>
                                    <div>
                                        <p className='PTLeftUpOneSecondItemMonth'>This Month <span className='PTLeftUpOneSecondItemMonthSpan'>#50,000.00</span></p>
                                        <p className='PTLeftUpOneSecondItemExpenditure'>Total expenditure<span className='PTLeftUpOneSecondItemMonthSpan'>#25,000.00</span></p>
                                    </div>
                                    <p className='CircularRoundsSVG'><CircularRoundsSVG/></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='PTLeftUpTwo'>
                    <p className='PTGraphSVG'><PTGraphSVG/></p>
                    </div>
                </div>
                <div className='paymentTramsactionLeftDown'>
                    <div className='paymentTramsactionLeftDownWrapper'>
                        <div className='PTLTopContainer'>
                            <button className='PTLTopContainerH1' onClick={() => setIsActive("MarketTransaction")}>Market Transactions</button>
                            <button className='PTLTopContainerH2' onClick={() => setIsActive("ServiceTransaction")}>Services Transactions</button>
                            <div className='PTLTopContainerH3'>
                                    <div className='PTLDFilter'>
                                    <p className='PTLDFilterTitle'>Filter by date</p>
                                    < input className='PTLDInput' placeholder='DD/MM/YY'/>
                                    <div className='PTLDEnterContainer'> 
                                        <p className='PTLDEnterIcon'><EnterSVG/></p>
                                        <p className='PTLDEnterText'>Enter</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div className='toggleContent'>
                        {isActive === "MarketTransaction" && <PaymentTransactionTab/>}
                        {isActive === "ServiceTransaction" && <ServicesTransactionTab/>}
                        </div>
                    </div>

                </div>          

            </div>
            <div className='paymentTransactionRight'>
                <div className='paymentTransactionRightWrapper'>
                    <div className='IPTransactionTopRow'>
                        <p className='IPTransactionHeader'>IPAY Transactions</p>
                        <div className='IPFilter'>
                                        <div className='IPRightFilter'>
                                            <p className='IPRightFilterTitle'>Filter by date</p>
                                            <input className='IPRightFilterinput' placeholder='DD/MM/YY'/>
                                                <div className='IPRightFiltertEnterContainer'> 
                                                    <p className='IPRightFilterEnterIcon'><EnterSVG/></p>
                                                    <p className='IPRightFilterEnterText'>Enter</p>
                                                </div>
                                         </div>
                        </div>
                    </div>
                    <div className='IPTransactionSecondRow'>
                        <button className='paymentType1 paymentTypeActive' onClick={() => setIsActiveAside("AppPayment")}>Payment within the app</button>
                        <button className='paymentType1' onClick={() => setIsActiveAside("OtherBanks")}>Payment to other banks</button>
                    </div>
                    <div className='transactionPaymentWrapper'>
                        <p className='transactionPaymentName'>Name</p>
                        <div className='debitWrapper'>
                            <p className='red debitWrapperText'>Debit</p>
                            <p className='green debitWrapperText'>Credit</p>
                        </div>
                    </div>
                    <div className='EntryContainer'>
                        {isActiveAside === "AppPayment" && <AppPayment/>}
                        {isActiveAside === "OtherBanks" && <OtherBanks/>}
                    
                    </div>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default PaymentTransaction