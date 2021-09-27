import React from 'react';
import logo from '../images/logo.png'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <h2 className="h2">The Shaha Donation fund from Doctor Sociaty</h2>
            <h2 className="header-fund">Total funds $100000 Million</h2>
            <br />
        </div>
    );
};

export default Header;