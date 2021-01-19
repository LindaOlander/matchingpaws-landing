import React from 'react';
import './NavBar.css';

const Navbar = ({color}) => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <p style={{color: `${color}`}}>Matching Paws</p>
            </div>
        </header>
    )
}

export default Navbar;