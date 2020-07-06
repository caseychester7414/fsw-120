import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar-wrapper'>
            <Link className='links' to='/'>HOME</Link>
            <Link className='links' to='/about'>ABOUT</Link>
            <Link className='links' to='/services'>SERVICES</Link>
        </div>
    )
}
export default Navbar;