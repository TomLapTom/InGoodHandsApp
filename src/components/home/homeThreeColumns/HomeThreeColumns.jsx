import React from "react";
import './homeThreeColoumns.scss';


const HomeThreeColumns = () => {

    return (
        <section className="home-section" id="whatIsItAbout">
            <div className="home-section__columns">
                <div className="home-section__column">
                    <div className="home-section__column-info">
                        <h3 className="home-section__column-info-header">10</h3>
                        <h4 className="home-section__column-info-subheader">oddanych worków</h4>
                        <p className="home-section__column-info-text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div className="home-section__column">
                    <div className="home-section__column-info">
                        <h3 className="home-section__column-info-header">5</h3>
                        <h4 className="home-section__column-info-subheader">wspartych organizacji</h4>
                        <p className="home-section__column-info-text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div className="home-section__column">
                    <div className="home-section__column-info">
                        <h3 className="home-section__column-info-header">7</h3>
                        <h4 className="home-section__column-info-subheader">zorganizowanych zbiórek</h4>
                        <p className="home-section__column-info-text">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeThreeColumns;