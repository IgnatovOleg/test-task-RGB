import React from "react";
import Input from "./form/Input";
import "./Form.scss"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const Form = () => {

    const schema = yup.object().shape({
        userName: yup.string().required("Введите имя и фамилию"),
        phone: yup.number().required("Введите номер телефона"),
        email: yup.string().required("Введите email").email("Введите корректный email"),
    });


    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }


    return (
        <div className="form-group-container">
            <h1>Запишитесь <p>бесплатно</p>
                и получите подарок</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register("userName", {
                        required: true,
                    })}
                    placeholder="Ваше имя и фамилия"
                />
                <Input
                    register={register("phone", {
                        required: true,
                    })}
                    placeholder="Ваш номер телефона" />
                <Input
                    register={register("email", {
                        required: true
                    })}
                    placeholder="Ваш email"
                />
                <button type="submit">Записаться бесплатно</button>
            </form>
            <div className="confidentiality">
                <span>Нажимая на кнопку я соглашаюсь <p>c политикой конфиденциальности</p></span>
                <div className="underline"></div>
            </div>
        </div>
    )
}

export default Form;