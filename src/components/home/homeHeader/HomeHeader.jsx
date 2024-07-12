import React from "react";
import ScrollNav from "../../scrollNav/ScrollNav";
import heroImage from "../../../assets/home/Hero Image.png";
import Navbar from "../../navbar/Navbar";
import Start from "../start/Start";
import './homeHeader.scss';

const HomeHeader = () => {
    return (
        <header className="home-header">
            <div className="home-header__image-container">
                <figure className="home-header__image-container__image-box">
                    <img src={heroImage} alt="Hero Image" className="home-header__image-container__image-box__image" />
                </figure>
            </div>
            <div className="home-header__content">
                <nav className="home-header__navbar">
                    <Navbar />
                </nav>
                <div className="home-header__scroll-nav">
                    <ScrollNav />
                </div>
                <section className="home-header__start">
                    <Start />
                </section>
            </div>
        </header>
    )
}

export default HomeHeader;