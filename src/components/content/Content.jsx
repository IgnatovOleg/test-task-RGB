import React from "react";
import "./Content.scss";
import vector from "../../img/Vector.svg"
import people from "../../img/Group3757.svg"
import bonus from "../../img/image1347.svg"


const Content = () => {


    return (
        <div className="content-container">
            <div className="webinar">
                <img src={vector} alt="" />
                <p>Вебинар</p>
            </div>
            <h1>front-end</h1>
            <div className="desc-name">
                <div className="red-box">
                    <div className="text">с нуля</div>
                </div>
                <h3>легкий старт в IT профессии</h3>
            </div>
            <div className="desc">
                <span>Узнайте какими навыками <strong>должен обладать фронтенд разработчик в 2022 году</strong> и как начать карьеру в востребованной профессии
                    с зарплатой
                    <h5>от 1 000$</h5>
                </span>
            </div>
            <div className="person">
                <img src={people} alt="" />
                <div className="person-info">
                    <span>Кирилл<p>КАСАТОНОВ</p></span>
                    <p>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</p>
                </div>
            </div>
            <div className="bonus">
                <img src={bonus} alt="" />
                <div className="bonus-info">
                    <span>Бонус за регистрацию</span>
                    <p>PDF-файл "5 преимуществ профессии фронтенд разработчика</p>
                </div>
            </div>
        </div>
    )
}

export default Content;