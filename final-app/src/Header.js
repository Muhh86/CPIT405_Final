import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  
import logo from './wingsLoader.gif';

function Header() {
    return (
        <header>
                <a href="/" className="logo">
                    <img src={logo} alt="Logo" className="menu-icon" />
                </a>
                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label htmlFor="menu-icon"></label>
                <nav className="nav">
                    <ul className="pt-5">
                        <li><Link to="/weather">Weather</Link></li>
                        <li><Link to="/currency-exchange">Currency Exchange</Link></li>
                        <li><Link to="/Attractions">Attractions</Link></li>
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;