import React from "react";
import Form from "./form/Form";
import "./FormGroup.scss"


const FormGroup = () => {



    return (
        <div className="form-group-container">
            <h1>Запишитесь <p>бесплатно</p>
                и получите подарок</h1>
            <Form
                placeholder="Ваше имя и фамилия"
            />
            <Form
                placeholder="Ваш номер телефона" />
            <Form
                placeholder="Ваш email"
            />
            <button>Записаться бесплатно</button>
            <div className="confidentiality">
                <span>Нажимая на кнопку я соглашаюсь <p>c политикой конфиденциальности</p></span>
                <div className="underline"></div>
            </div>
        </div>
    )
}

export default FormGroup;