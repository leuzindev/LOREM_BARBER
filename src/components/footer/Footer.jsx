import React from 'react'
import './Footer.css'
import logo_footer from '../../assets/img/logo_do_footer.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo_footer} className="logo_footer" />
    </div>
  )
}
