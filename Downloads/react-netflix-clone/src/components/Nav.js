import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav (){
  
 const [show, setShow] = useState(false)
  
 useEffect(() => {
    window.addEventListener('scroll',  () => {
      if(window.scrollY > 50 ) {
        setShow(true);
      }else {
        setShow(false);
      }  
    });
    return () => {
        window.removeEventListener('scroll', () => {});
    };
 }, []);
  
    return (
    <nav className={`nav ${setShow && 'nav__black'}`}>
        <img 
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png'
            className='nav__logo'
            onClick={()=> window.location.reload()}
        />
        <img 
            alt='User logged'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            className='nav__avatar'
        />
    </nav>
  )
}

export default Nav;