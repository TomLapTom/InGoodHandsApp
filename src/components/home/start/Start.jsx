import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../../../assets/home/Decoration.svg";
import "./start.scss";

const Start = () => {
    return (
        <div id="start" className="homeHeaderBox">
            <div className="homeHeaderBox_Content">
                <div className="downMenuTop_content">
                    <p>Zacznij pomagać!</p>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                </div>
                <img src={Decoration} alt="Decoration" className="decorationImage" />
                <div className="downMenuDown">
                    <div className="downMenuDown_Box">
                        <Link className="Link" to="/login">
                            <p>oddaj</p>
                            <p>rzeczy</p>
                        </Link>
                    </div>
                    <div className="downMenuDown_Box">
                        <Link className="Link" to="/login">
                            <p>zorganizuj</p>
                            <p>zbiórkę</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Start;