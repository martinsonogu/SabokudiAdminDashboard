import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import {IpaySVG, ForwardArrowSVG, DashboardSVG , ProductSVG, OrderSVG, PaymentSVG, EscrowSVG, LogoutSVG} from '../../assets/svg/icons'


const sidebar = () => {
  return (
    <div className='sidebar'> 
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <div className='sidebarTitle'>
                    <p className="logo">
                        <IpaySVG/>
                    </p>
                </div>
                <ul className='sidebarList'>
                    <Link to='/' className='link'>
                        <li className='sidebarListItem' >
                            <DashboardSVG/>
                            <p>Dashboard</p>
                            <ForwardArrowSVG/>
                        </li>
                    </Link>
                    <Link to='/payment' className='link'>
                        <li className='sidebarListItem' >
                        <ProductSVG/>
                            <p>Products</p>
                            <ForwardArrowSVG/>
                        </li>
                    </Link>
                    <Link to='/order' className='link'>
                        <li className='sidebarListItem' >
                            <OrderSVG/>
                            <p>Order</p>
                            <ForwardArrowSVG/>
                        </li>
                    </Link>
                    <Link to='/paymentTransaction' className='link'>
                        <li className='sidebarListItem ' >
                            <PaymentSVG/>
                            <p>Payment</p>
                            <ForwardArrowSVG/>
                        </li>
                    </Link>
                    <Link to='/EscrowTransaction' className='link'>
                        <li className='sidebarListItem' >
                            <EscrowSVG/>
                            <p>Escrow</p>
                            <ForwardArrowSVG/>
                        </li>
                    </Link>
                    
                </ul>
                <div className='logout'>
                        <li className='sidebarListItem' >
                            <LogoutSVG/>
                    <p>Logout</p>
                        </li>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default sidebar