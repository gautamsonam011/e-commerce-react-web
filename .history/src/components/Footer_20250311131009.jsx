import React from 'react'
import "./Navbar.css";
import logo from "../Images/logo.png";

function Footer() {
  return (
    <div className='footer-bg'>
      <div className='footer-container'>
        <div className='column'>
          <h1>Address</h1>
          <img src={logo} />
        </div>
        <div className='column'>
          <h1>Important Links</h1>
        </div>
        <div className='column'>
          <h1>Support</h1>
        </div>
      </div>
      <div className="footer">
        <p>@sonamGautam</p>
      </div>
    </div>
  )
}

export default Footer
