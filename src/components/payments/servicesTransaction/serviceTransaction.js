import React from 'react'
import './serviceTransaction.css'
import { CircularRoundsSVG, EnterSVG, IpaySmall, PTGraphSVG } from '../../../assets/svg/icons'
import pic from '../../../assets/images/transactionItem.png'

const paymentTransaction = () => {
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
                            <p className='PTLTopContainerH2'>Market Transactions</p>
                            <p className='PTLTopContainerH1'>Services Transactions</p>
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
                        <div className='PTLDHeaderContainer'>
                                <p className='PTLDheader'>Service</p>
                                <p className='PTLDheader'>Date</p>
                                <p className='PTLDheader'>Location</p>
                                <p className='PTLDheader'>Item Details</p>
                                <p className='PTLDheader'>Amount</p>
                                <p className='PTLDheader'>Status</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
                        <div className='PTLDEntries'>
                            <img src={pic} alt=''className='PTLDEntryImg' />
                            <p className='PTLDEntryText'>12/07/2022</p>
                            <p className='PTLDEntryText'>Kaduna</p>
                            <p className='PTLDEntryText'>Carpenter</p>
                            <p className='PTLDEntryText'>#100,000</p>
                            <p className='PTLDEntryText yellow'>Out on delivery</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
                        <div className='PTLDEntries'>
                            <img src={pic} alt=''className='PTLDEntryImg' />
                            <p className='PTLDEntryText'>12/07/2022</p>
                            <p className='PTLDEntryText'>Abuja</p>
                            <p className='PTLDEntryText'>House</p>
                            <p className='PTLDEntryText'>#100,000</p>
                            <p className='PTLDEntryText green'>Delivered</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
                        <div className='PTLDEntries'>
                            <img src={pic} alt=''className='PTLDEntryImg' />
                            <p className='PTLDEntryText'>12/07/2022</p>
                            <p className='PTLDEntryText'>Abeokuta</p>
                            <p className='PTLDEntryText'>Mechanic</p>
                            <p className='PTLDEntryText'>#100,000</p>
                            <p className='PTLDEntryText darkBrown'>Order Confirmation</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
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
                        <p className='paymentType1 paymentTypeActive'>Payment within the app</p>
                        <p className='paymentType1'>Payment to other banks</p>
                    </div>
                    <div className='transactionPaymentWrapper'>
                        <p className='transactionPaymentName'>Name</p>
                        <div className='debitWrapper'>
                            <p className='red debitWrapperText'>Debit</p>
                            <p className='green debitWrapperText'>Credit</p>
                        </div>
                    </div>
                    <div className='EntryContainer'>
                    <div className='paymentEntriesWrapper'>
                        <p className='paymentEntriesName'>
                        Ademoye Rachel AdeIPAY0022 <br/>
                        <span className='spanTo'>To</span> <br/>
                        Bemekun Taiwo BemeIPAY3458
                        </p>
                        <div className='debitEntryWrapper'>
                            <p className='red debitEntryText'>#5000</p>
                            <p className='green debitEntryText'></p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='paymentEntriesWrapper'>
                        <p className='paymentEntriesName'>
                        Ademoye Rachel AdeIPAY0022 <br/>
                        <span className='spanTo'>To</span> <br/>
                        Bemekun Taiwo BemeIPAY3458
                        </p>
                        <div className='debitEntryWrapper'>
                            <p className='red debitEntryText'></p>
                            <p className='green debitEntryText'>#5000</p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='paymentEntriesWrapper'>
                        <p className='paymentEntriesName'>
                        Ademoye Rachel AdeIPAY0022 <br/>
                        <span className='spanTo'>To</span> <br/>
                        Bemekun Taiwo BemeIPAY3458
                        </p>
                        <div className='debitEntryWrapper'>
                            <p className='red debitEntryText'>#5000</p>
                            <p className='green debitEntryText'></p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='paymentEntriesWrapper'>
                        <p className='paymentEntriesName'>
                        Ademoye Rachel AdeIPAY0022 <br/>
                        <span className='spanTo'>To</span> <br/>
                        Bemekun Taiwo BemeIPAY3458
                        </p>
                        <div className='debitEntryWrapper'>
                            <p className='red debitEntryText'></p>
                            <p className='green debitEntryText'>#5000</p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='paymentEntriesWrapper'>
                        <p className='paymentEntriesName'>
                        Ademoye Rachel AdeIPAY0022 <br/>
                        <span className='spanTo'>To</span> <br/>
                        Bemekun Taiwo BemeIPAY3458
                        </p>
                        <div className='debitEntryWrapper'>
                            <p className='red debitEntryText'>#5000</p>
                            <p className='green debitEntryText'></p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    
                    </div>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default paymentTransaction