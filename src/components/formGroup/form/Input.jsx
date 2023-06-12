import React from "react";
import "./Input.scss"


const Input = ({placeholder, register, countryList}) => {



    return(
        <div className="form-container">
            <input type="text" placeholder={placeholder} {...register} list={countryList}/>
        </div>
    )
}

export default Input;