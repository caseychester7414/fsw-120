import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbarWrapper'>
            <Link className='links' to='/'>HOME</Link>
            <Link className='links' to='/about'>ABOUT</Link>
            <Link className='links' to='/service'>SERVICES</Link>
        </div>
    )
}
export default Navbar;