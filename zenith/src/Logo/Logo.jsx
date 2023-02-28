import React from 'react'
import Logoo from '/Users/sachanv/Desktop/ddev/zenith/src/Logo/zenith-logo.jpg';
import './Logo.css'
function Logo() {
  return (
    <div className='Zenith-log'>
         <img src={Logoo} alt="React Logo" height={100} width={100} style={{zIndex:-2}}/>
      </div>
  )
}

export default Logo
