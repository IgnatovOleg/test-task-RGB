import React, {useRef} from "react";
import Input from "./form/Input";
import "./Form.scss"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";



const Form = () => {

    const schema = yup.object().shape({
        userName: yup.string().required("Введите имя и фамилию"),
        phone: yup.number().required("Введите номер телефона"),
        email: yup.string().required("Введите email").email("Введите корректный email"),
    });


    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const form = useRef();

    const onSubmit = () => {

        emailjs.sendForm('service_crrv3v9', 'template_rqavohp', form.current, 'NYb4hLJM135sTvLCD')
            .then((result) => {
                alert("Сообщение отправлено")
            }, (error) => {
                alert("Ошибка")
            });
    }


    return (
        <div className="form-group-container">
            <h1>Запишитесь <p>бесплатно</p>
                и получите подарок</h1>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register("userName", {
                        required: true,
                    })}
                    placeholder="Ваше имя и фамилия"
                />
                <Input
                    countryList={"countryList"}
                    register={register("phone", {
                        required: true
                    })}
                    placeholder="Ваш номер телефона" />
                <datalist id="countryList">
                    <option value="+52 5">usa</option>
                    <option value="+1 437">Canada</option>
                    <option value="+380">UK</option>
                    <option value="8 10 612">Australia</option>
                </datalist>
                <Input
                    register={register("email", {
                        required: true
                    })}
                    placeholder="Ваш email"
                />
                <button>Записаться бесплатно</button>
            </form>
            <div className="confidentiality">
                <span>Нажимая на кнопку я соглашаюсь <p>c политикой конфиденциальности</p></span>
                <div className="underline"></div>
            </div>
        </div>
    )
}

export default Form;