import React from 'react'
import "./Navbar.css";
import logo from "../Images/logo.png";

function Footer() {
  return (
    <div>
      <div className='footer-container'>
        <div className='column'>
          <h1>Address</h1>
          <img {logo}/>
        </div>
        <div className='column'>

        </div>
        <div className='column'>

        </div>
      </div>
      <div>
        <p>@sonamGautam</p>
      </div>
    </div>
  )
}

export default Footer
