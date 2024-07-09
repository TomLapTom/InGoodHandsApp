import React from "react";
import { Link } from "react-router-dom";
import './fourSteps.scss';
import Icon1 from "../../../assets/home/Icon-1.png";
import Icon2 from "../../../assets/home/Icon-2.png";
import Icon3 from "../../../assets/home/Icon-3.png";
import Icon4 from "../../../assets/home/Icon-4.png";
import Decoration from "../../../assets/home/Decoration.svg";


const FourSteps = () => {
    return (
        <>
            <section className="four-steps">
                <div className="four-steps__header">
                    <p className="four-steps__header__title">Wystarczą 4 proste kroki</p>
                    <div className="four-steps__header__decorations">
                        <img src={Decoration} alt="Decoration" className="four-steps__header__decorations__decoration" />
                    </div>
                </div>
                <div className="four-steps__content">
                    <div className="four-steps__content__step">
                        <img src={Icon1} alt="Ikona 1" className="four-steps__content__step__image" />
                        <h5 className="four-steps__content__step__headline">Wybierz rzeczy</h5>
                        <hr className="four-steps__content__step__separator" />
                        <p className="four-steps__content__step__description">ubrania, zabawki, sprzęt, inne</p>
                    </div>
                    <div className="four-steps__content__step">
                        <img src={Icon2} alt="Ikona 2" className="four-steps__content__step__image" />
                        <h5 className="four-steps__content__step__headline">Spakuj je</h5>
                        <hr className="four-steps__content__step__separator" />
                        <p className="four-steps__content__step__description">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="four-steps__content__step">
                        <img src={Icon3} alt="Ikona 3" className="four-steps__content__step__image" />
                        <h5 className="four-steps__content__step__headline">Zdecyduj komu chcesz pomóc</h5>
                        <hr className="four-steps__content__step__separator" />
                        <p className="four-steps__content__step__description">wybierz zaufane miejsce</p>
                    </div>
                    <div className="four-steps__content__step">
                        <img src={Icon4} alt="Ikona 4" className="four-steps__content__step__image" />
                        <h5 className="four-steps__content__step__headline">Zamów kuriera</h5>
                        <hr className="four-steps__content__step__separator" />
                        <p className="four-steps__content__step__description">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="four-steps__action">
                    <button className="four-steps__action__button">
                        <Link to="/login" className="four-steps__action__button__link">Oddaj rzeczy</Link>
                    </button>
                </div>
            </section>
        </>
    );
}

export default FourSteps;