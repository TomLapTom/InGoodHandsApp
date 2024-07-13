import React from "react";
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/login" className="navbar__link">Zaloguj</Link>
            <Link to="/register" className="navbar__link">Załóż konto</Link>
            <Link to="/logouth" className="navbar__link">Wyloguj</Link>
        </nav>
    )
}

export default Navbar;