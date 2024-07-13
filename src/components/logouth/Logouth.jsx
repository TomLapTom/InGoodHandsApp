import React from "react";
import ScrollNav from "../scrollNav/ScrollNav";
import Navbar from "../navbar/Navbar";
import Decoration from "../../assets/home/Decoration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import './logouth.scss';

const Logouth = () => {
    return (
        <div id="logouth" className="logouth-container">
            <header className="home-header">
                <div className="home-header__content">
                    <nav className="home-header__navbar">
                        <Navbar />
                    </nav>
                    <div className="home-header__scroll-nav">
                        <Link to="/" className="home-header__scroll-nav__home">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        {/* <ScrollNav /> */}
                    </div>
                </div>
            </header>
            <section className="logouth-section">
                <div className="logouth-section__title">
                    <p>Wylogowanie nastąpiło pomyślnie</p>
                </div>
                <div className="logouth-section__decoration">
                    <img src={Decoration} alt="Dekoracja" className="logouth-section__decoration__image" />
                </div>
                <div className="logouth-section__actions">
                    <Link to="/" className="logouth-section__actions__button">Strona główna</Link>
                </div>
            </section>
        </div>
    );
}

export default Logouth;