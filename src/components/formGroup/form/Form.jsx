import React from "react";
import "./Form.scss"


const Form = ({placeholder}) => {



    return(
        <div className="form-container">
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}

export default Form;