import React from 'react'
import './paymentTransaction.css'
import pic from '../../../assets/images/transactionItem.png'

const paymentTransaction = () => {
  return (
    <div>
        <div className='PTLDHeaderContainer'>
                                <p className='PTLDheader'>Item</p>
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
                            <p className='PTLDEntryText'>Abuja</p>
                            <p className='PTLDEntryText'>Woman Hair</p>
                            <p className='PTLDEntryText'>#100,000</p>
                            <p className='PTLDEntryText yellow'>Out on delivery</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
                        <div className='PTLDEntries'>
                            <img src={pic} alt=''className='PTLDEntryImg' />
                            <p className='PTLDEntryText'>12/07/2022</p>
                            <p className='PTLDEntryText'>Abuja</p>
                            <p className='PTLDEntryText'>Woman Hair</p>
                            <p className='PTLDEntryText'>#100,000</p>
                            <p className='PTLDEntryText green'>Delivered</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
                        <div className='PTLDEntries'>
                            <img src={pic} alt=''className='PTLDEntryImg' />
                            <p className='PTLDEntryText'>12/07/2022</p>
                            <p className='PTLDEntryText'>Abuja</p>
                            <p className='PTLDEntryText'>Woman Hair</p>
                            <p className='PTLDEntryText'>#100,000</p>
                            <p className='PTLDEntryText darkBrown'>Order Confirmation</p>
                        </div>
                        <div className='PTDLHorizontalLine'></div>
    </div>
  )
}

export default paymentTransaction