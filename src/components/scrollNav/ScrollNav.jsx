import React from "react";
import { Link } from 'react-scroll';
import './scrollNav.scss';

const ScrollNav = () => {
    return (
        <nav className="nav-scroll">
            <Link to="start" smooth={true} duration={500} className="nav-scroll__link">Start</Link>
            <Link to="whatIsItAbout" smooth={true} duration={500} className="nav-scroll__link">O co chodzi</Link>
            <Link to="aboutUs" smooth={true} duration={500} className="nav-scroll__link">O nas</Link>
            <Link to="whoDoWeHelp" smooth={true} duration={500} className="nav-scroll__link">Fundacje i organizacje</Link>
            <Link to="contact" smooth={true} duration={500} className="nav-scroll__link">Kontakt</Link>
        </nav>
    )
}

export default ScrollNav;