import React from 'react'
import './style.css'
import logo from '../Assets/Vector.png'
const HeroNavBar = () => {
  return (
    <div className='container'>
<div id='navItems'>
  <text style={{color:'#00BBAA'}}>Home</text>
  <text style={{color:'#00BBAA'}}>Products</text>
  <text style={{color:'#00BBAA'}}>Pricing</text>
  <text style={{color:'#00BBAA'}}>Contact Us</text>
</div>
<div id='image'>
  <image> <img src={logo} alt="" srcset="" /></image>
</div>
<div id='buttonItems'>
  <text>Login</text>
  <button>Try For Free</button>
</div>
    </div>
  )
}