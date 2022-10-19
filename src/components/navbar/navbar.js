import React from 'react'
import './navbar.css'
import {NotificationIconSVG, SettingsSVG, VerticalLineSVG} from "../../assets/svg/icons"
import adminPic from "../../assets/images/adminPic.png"


const navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
          <div className='navbarFirstContainer'>
            <input className='NavbarFirstContainerInput'
            placeholder='Search anything'
            />
            <div className='navbarFirstContainerInnerContainer'>
              <p className='NotificationIcon'><NotificationIconSVG/></p>
              <p className='SettingsIcon'><SettingsSVG/></p>
            </div>
          </div>
          <div className='navbarSecondContainer'>
            <VerticalLineSVG/>
            <div className='navbarSecondContainerA'> 
              <p className='navbarSecondContainerAName'>Hafsoh Omolola</p>
              <p className='navbarSecondContainerARole'>Admin Manager</p>
            </div>
            <img src={adminPic} alt='' className='profilepic'/>
          </div>
        </div>

    </div>
  )
}

export default navbar