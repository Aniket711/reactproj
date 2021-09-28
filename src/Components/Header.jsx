import React from 'react';
import './Header.css';

const Header = ({ heading, details }) => {
    return (
        <div className="header_container">
            <h2>{heading}</h2>
            <p>{details}</p>
        </div>
    )
};

export default Header;
