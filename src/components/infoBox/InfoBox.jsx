import React from "react"
import "./InfoBox.scss"
import people from "../../img/Group3757.svg"
import bonus from "../../img/image1347.svg"


const InfoBox = () => {



    return (
        <div>
            <div className="bonus-mobile">
                <img src={bonus} alt="" />
                <div className="bonus-info-mobile">
                    <span>Бонус за регистрацию</span>
                    <p>PDF-файл "5 преимуществ профессии веб-дизайнера"</p>
                </div>
            </div>
            <div className="person-mobile">
                <img src={people} alt="" />
                <div className="person-info-mobile">
                    <span>Кирилл<p>КАСАТОНОВ</p></span>
                    <p>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</p>
                </div>
            </div>
        </div>
    )
}

export default InfoBox;