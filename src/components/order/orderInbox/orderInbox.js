import React from 'react'
import './orderInbox.css'
import Image from '../../../assets/images/orderInboxImg.png'

const orderInbox = () => {
  return (
    <div className='orderInbox'>
        <div className='orderInboxWrapper'>
            <p className='orederInboxHeader'>Order inbox</p>
            <div className='oiMainContent'>
                <div className='oiItem1'>
                    <div className='oiItem1Wrapper'>
                        <img src={Image} alt='' className='oiItemImage'/>
                        <div className='oiItemOthers'>
                            <div className='oiItemTopRow'>
                                <p className='oiItemTopRowName'>Olanrewaju Ezekiel</p>
                                <p className='oiItemTopRowDuration'>3 days ago</p>
                            </div>
                            <div className='oiItemSecondRow'>
                                <p className='oiItemSecondRowCategory'>Woman Hair</p>
                                <p className='oiItemSecondRowAmount'>#20,000</p>
                            </div>
                            <p className='oiItemDetails'>Dear Olarenwaju, your order has been confirmed successfully, 
                                and delivery will be processed as soon as possible...........
                            </p>
                    </div>
                    
                    </div>
                    <div className='oiItem1Wrapper'>
                        <img src={Image} alt='' className='oiItemImage'/>
                        <div className='oiItemOthers'>
                            <div className='oiItemTopRow'>
                                <p className='oiItemTopRowName'>Olanrewaju Ezekiel</p>
                                <p className='oiItemTopRowDuration'>3 days ago</p>
                            </div>
                            <div className='oiItemSecondRow'>
                                <p className='oiItemSecondRowCategory'>Woman Hair</p>
                                <p className='oiItemSecondRowAmount'>#20,000</p>
                            </div>
                            <p className='oiItemDetails'>Dear Olarenwaju, your order has been confirmed successfully, 
                                and delivery will be processed as soon as possible...........
                            </p>
                    </div>
                    
                    </div>
                    <div className='oiItem1Wrapper'>
                        <img src={Image} alt='' className='oiItemImage'/>
                        <div className='oiItemOthers'>
                            <div className='oiItemTopRow'>
                                <p className='oiItemTopRowName'>Olanrewaju Ezekiel</p>
                                <p className='oiItemTopRowDuration'>3 days ago</p>
                            </div>
                            <div className='oiItemSecondRow'>
                                <p className='oiItemSecondRowCategory'>Woman Hair</p>
                                <p className='oiItemSecondRowAmount'>#20,000</p>
                            </div>
                            <p className='oiItemDetails'>Dear Olarenwaju, your order has been confirmed successfully, 
                                and delivery will be processed as soon as possible...........
                            </p>
                    </div>
                    
                    </div>
                    <div className='oiItem1Wrapper'>
                        <img src={Image} alt='' className='oiItemImage'/>
                        <div className='oiItemOthers'>
                            <div className='oiItemTopRow'>
                                <p className='oiItemTopRowName'>Olanrewaju Ezekiel</p>
                                <p className='oiItemTopRowDuration'>3 days ago</p>
                            </div>
                            <div className='oiItemSecondRow'>
                                <p className='oiItemSecondRowCategory'>Woman Hair</p>
                                <p className='oiItemSecondRowAmount'>#20,000</p>
                            </div>
                            <p className='oiItemDetails'>Dear Olarenwaju, your order has been confirmed successfully, 
                                and delivery will be processed as soon as possible...........
                            </p>
                    </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default orderInbox