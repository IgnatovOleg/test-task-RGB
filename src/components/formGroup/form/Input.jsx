import React from "react";
import "./Input.scss"


const Input = ({placeholder, register}) => {



    return(
        <div className="form-container">
            <input type="text" placeholder={placeholder} {...register}/>
        </div>
    )
}

export default Input;