import React from 'react'
import './overallStatus.css'
import Hair from "../../../../assets/images/hair.png"
import Kitchen from "../../../../assets/images/kitchen.png"

const overallStatus = () => {
  return (
    <div>
        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Kitchen} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status'>Delivery in progress</p>
                            
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Hair} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status green'>Delivered</p>
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Hair} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status red'>Not Delivered</p>
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='mainContent1'>
                            <p className='names'><span className='name'>Kemi Olushina </span>ordered from <span className='name'>Fola Johnson</span></p>
                            <img src={Kitchen} alt='' className='image'/>
                            <p className='productCategory'>Woman Hair</p>
                            <p className='amount'>#10,000</p>
                            <p className='status'>Delivered  green</p>
                            
                        </div>
    </div>
  )
}

export default overallStatus