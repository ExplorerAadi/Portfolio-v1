import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header>
            <div id='left-header'>
                <h2>AR</h2>
            </div>
            <div id='right-header'>
                <a href='#'>Work</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>
        </header>
    );
};

export default Header;
