import React, { Component } from "react";
import "./header.css";
import menu from "../../media/menu.svg";
import cross from "../../media/cross.svg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isMenuVisible: false };
    }

    componentDidMount() {
        window.addEventListener(
            "resize",
            () => {
                this.setState({
                    isMobile: window.innerWidth <= 768,
                });
            },
            false
        );
    }

    toggleMenu = (e) => {
        this.setState((state) => ({
            isMenuVisible: !state.isMenuVisible,
        }));
    };
    // getClassName = ()

    render() {
        return (
            <header>
                <div className='navWrapper container'>
                    <div id='left-header'>
                        <h2>AR</h2>
                    </div>
                    <img
                        src={menu}
                        alt='menu'
                        onClick={(e) => {
                            this.toggleMenu(e);
                        }}
                    />
                    <ul
                        className={`${
                            this.state.isMenuVisible
                                ? "slideIn"
                                : this.state.isMobile
                                ? "slideOut"
                                : ""
                        }`}
                    >
                        <img
                            src={cross}
                            alt='cancel'
                            onClick={(e) => {
                                this.toggleMenu(e);
                            }}
                        />
                        <a href='#projects'>Work</a>
                        <a href='#about'>About</a>
                        <a href='#contact'>Contact</a>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
