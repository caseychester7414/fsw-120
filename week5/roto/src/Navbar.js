import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbarWrapper'>
            <div classname="div1">
            <Link className='links' to='/'>HOME</Link>
            </div>
            <div classname="div2">
            <Link className='links' to='/about'>ABOUT</Link>
            </div>
            <div classname="div3">
            <Link className='links' to='/service'>SERVICES</Link>
            </div>
        </div>
    )
}
export default Navbar;