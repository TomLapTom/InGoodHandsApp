import React, { useState } from "react";
import Decoration from "../../../assets/home/Decoration.svg";
import fundationData from "../../../data/fundation.js";
import localData from "../../../data/local.js";
import organizationsData from "../../../data/organizations.js";
import descriptions from "../../../data/descriptions.js";
import './whoDoWeHelp.scss';

const WhoDoWeHelp = () => {

    const [currentData, setCurrentData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3

    const handleButtonClick = (data) => {
        setSelectedCategory(data)
        switch (data) {
            case 'fundation':
                setCurrentData(fundationData);
                break;
            case 'local':
                setCurrentData(localData);
                break;
            case 'organizations':
                setCurrentData(organizationsData);
                break;
            default:
                setCurrentData([]);
        }
        setCurrentPage(1)
    }



    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(currentData.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div id="whoDoWeHelp" className="who-do-we-help">
            <div className="who-do-we-help__header">
                <p className="who-do-we-help__header__title">Komu pomagamy ?</p>
                <div className="who-do-we-help__header__decoration">
                    <img src={Decoration} alt="Decoration" className="who-do-we-help__header__decoration__img" />
                </div>
            </div>
            <div className="who-do-we-help__categories">
                <button onClick={() => handleButtonClick('fundation')} className="who-do-we-help__categories__button">Fundacjom</button>
                <button onClick={() => handleButtonClick('organizations')} className="who-do-we-help__categories__button">Organizacjom pozarządowym</button>
                <button onClick={() => handleButtonClick('local')} className="who-do-we-help__categories__button">Lokalnym zbiórkom</button>
            </div>
            {descriptions.filter(description => description.category === selectedCategory).map((description) => (
                <div key={description.id} className="who-do-we-help__description">
                    <p className="who-do-we-help__description__txt">
                        {description.txt}
                    </p>
                </div>
            ))}
            {currentItems.map((item) => (
                <div key={item.id} className="who-do-we-help__organizations">

                    <div className="who-do-we-help__organizations__item">
                        <div className="who-do-we-help__organizations__item__content">
                            <p className="who-do-we-help__organizations__item__content__name">{item.name}</p>
                            <p className="who-do-we-help__organizations__item__content__description">{item.description}</p>
                        </div>

                    </div>
                    <span className="who-do-we-help__organizations__item__detail">{item.item}</span>

                </div>
            ))}
            <div className={`who-do-we-help__pagination ${pageNumbers.length > 1 ? 'who-do-we-help__pagination--visible' : ''}`}>
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => paginate(number)} className="who-do-we-help__pagination__pagination-button">
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default WhoDoWeHelp