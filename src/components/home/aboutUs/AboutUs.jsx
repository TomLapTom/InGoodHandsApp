import React from "react";
import People from "../../../assets/home/People.png";
import Decoration from "../../../assets/home/Decoration.svg";
import Signature from "../../../assets/home/Signature.svg";
import './aboutUs.scss';

const AboutUs = () => {

    return (
        <section id="aboutUs" className="about-us">
            <div className="about-us__wrapper">
                <p className="about-us__wrapper__title">O nas</p>
                <div className="about-us__wrapper__container">
                    <img src={Decoration} alt="Decoration" className="about-us__wrapper__container__container-image" />
                </div>
                <div className="about-us__wrapper__content">
                    <div className="about-us__wrapper__content__description">
                        <p className="about-us__wrapper__content__description__text">
                            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                    </div>
                </div>
                <div className="about-us__wrapper__sign">
                    <img src={Signature} alt="Decoration" className="about-us__wrapper__sign__signature" />
                </div>
            </div>
            <div className="about-us__images">
                <div className="about-us__images__image-container">
                    <img src={People} alt="People" className="about-us__images__image-container__image" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;