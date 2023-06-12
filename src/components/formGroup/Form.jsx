import React, { useRef } from "react";
import Input from "./form/Input";
import "./Form.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";



const Form = () => {


    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

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
                        pattern: /^[A-Za-zА-Яа-яЁёІіЇї\s]+$/i,
                    })}
                    placeholder="Ваше имя и фамилия"
                />
                <div className="warning-name">{errors.userName && <span>Имя и фамилия должны иметь больше 5 букв</span>}</div>
                <Input
                    countryList={"countryList"}
                    register={register("phone", {
                        required: true,
                        pattern: /^[0-9]{10,}$/,
                    })}
                    placeholder="Ваш номер телефона" />
                {errors.phone && (
                    <div className="warning-phone"><span>Номер должен иметь не меньше 10 цифер</span></div>
                )}
                <datalist id="countryList">
                    <option value="52 5">usa</option>
                    <option value="1 437">Canada</option>
                    <option value="380">UK</option>
                    <option value="8 10 612">Australia</option>
                </datalist>
                <Input
                    register={register("email", { 
                        required: true, 
                        pattern: /^\S+@\S+$/i 
                    })}
                    placeholder="Ваш email"
                />
                <div className="warning-email">{errors.email && <span>Введите корректный email</span>}</div>
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