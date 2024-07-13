import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Decoration from "../../../assets/home/Decoration.svg";
import Facebook from "../../../assets/home/Facebook.png";
import Instagram from "../../../assets/home/Instagram.png";
import { submitForm } from "../../../services/api";
import './contact.scss';

const schema = z.object({
    name: z.string()
        .min(2, { message: "Imie musi mieć minimum 2 litery" })
        .regex(/^\S+$/, { message: "Pole powinno zawierać tylko jeden wyraz" }),
    email: z.string().email({ message: "Nieprawidłowy adres email" }),
    message: z.string().min(120, { message: "Wiadomość musi zawierać przynajmniej 120 znaków" })
});

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)
    });

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isError, setIsError] = useState(false)

    const onSubmit = async (data) => {
        const response = await submitForm(data);
        if (response.success) {
            setIsSubmitted(true);
            setIsError(false);
            reset();
            setTimeout(() => setIsSubmitted(false), 2000);
        } else {
            console.error("Wystąpił błąd przy wysyłaniu formularza: ", response.error);
            setIsError(true);
            setIsSubmitted(false);
        }
    };


    return (
        <>
            <section id="contact" className="container">
                <div className="container__contact">
                    <div className="container__contact__info">
                        <h2 className="container__contact__info__title">Skontaktuj się z nami</h2>
                        <div className="container__contact__info__decoration">
                            <img src={Decoration} alt="Decoration" />
                        </div>
                        {isSubmitted && !isError && <p className="container__contact__info__success-message">Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>}
                        {isError && <p className="container__contact__info__error-message">Wysyłka wiadomości nie powiodła się. Spróbuj ponownie.</p>}
                    </div>
                    <form className="container__contact__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="container__contact__form-group-text">
                            <label htmlFor="name" className="container__contact__form-group-text__label">
                                <span>Wpisz swoje imię</span>
                                <input {...register("name")} type="text" id="name" className="container__contact__form-group-text__input" placeholder="Krzysztof" />
                            </label>
                            {errors.name && <p>{errors.name.message}</p>}
                            <label htmlFor="email" className="container__contact__form-group-text__label">
                                <span>Wpisz swój email</span>
                                <input {...register("email")} type="text" id="email" className="container__contact__form-group-text__input" placeholder="abc@xyz.pl" />
                            </label>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="container__contact__form-group-textarea">
                            <label htmlFor="message" className="container__contact__form-group-textarea__label">
                                <div>Wpisz swoją wiadomość</div>
                                <textarea {...register("message")} id="message" className="container__contact__form-group-textarea__form-textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                            </label>
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                        <div className="container__contact__form-group-button">
                            <button type="submit" className="container__contact__form-group-button__submit">Wyślij</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__content">
                    <p className="footer__txt">Copyright by Coders Lab</p>
                    <div className="footer__icons">
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contact;