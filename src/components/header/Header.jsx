import React from "react";
import "./Header.scss";
import shape from "../../img/Shape.svg"
import powercode from "../../img/POWERCODE.svg"
import academy from "../../img/ACADEMY.svg"
import calendar from "../../img/Сalendar.svg"
import time from "../../img/gg_time.svg"

const Header = () => {



    return(
        <div className="header-container">
            <div className="logo-container">
                <img src={shape} alt="" className="logo"/>
                <img src={powercode} alt="" className="powercode"/>
                <img src={academy} alt="" className="academy"/>
            </div>
            <div className="date">
                <img src={calendar} alt="" />
                <p>28 декабря</p>
            </div>
            <div className="time">
                <img src={time} alt="" />
                <p>3,5 часа</p>
            </div>
        </div>
    )
}

export default Header;