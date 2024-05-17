import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div style={{width:'100%',height:'60px',backgroundColor:'cyan',display:'flex', }}>
        <div className="container" style={{width:'20%',height:'inherit', display:'flex',justifyContent:'space-between',alignItems:'center' ,marginLeft:'80%',columnGap:'20px',flexDirection:'row-reverse'}}>
        <div>Home</div>
        <div>About Us</div>
        <div>Contact us</div>
        <div>Gallery</div>
        </div>
      </div>
    </div>
  )
}

export default Header
