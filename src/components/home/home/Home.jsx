import React from "react";
import HomeHeader from "../homeHeader/HomeHeader";
import HomeThreeColumns from "../homeThreeColumns/HomeThreeColumns";
import ScrollNav from "../../scrollNav/ScrollNav";
import MainPage from "../start/Start";
import heroImage from "../../../assets/home/Hero Image.png";
import Start from "../start/Start";
import AboutUs from "../aboutUs/AboutUs";
import Organizations from "../organizations/Organizations";
import Contact from "../contact/Contact";
import FourSteps from "../fourSteps/FourSteps";
import './home.scss';
import Navbar from "../../navbar/Navbar";


const Home = () => {

    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <FourSteps />
            <AboutUs />
            <Organizations />
            <Contact />
        </>
    )
}

export default Home;