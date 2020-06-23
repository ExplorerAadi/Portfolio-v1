import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header>
            <div id='left-header'>
                <h2>AR</h2>
            </div>
            <div id='right-header'>
                <a href='#projects'>Work</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </header>
    );
};

export default Header;
