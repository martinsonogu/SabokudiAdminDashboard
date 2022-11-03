import React from 'react'
import './serviceTransaction.css'
import pic from '../../../assets/images/transactionItem.png'

const serviceTransaction = () => {
  return (
                    <div>
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
  )
}

export default serviceTransaction