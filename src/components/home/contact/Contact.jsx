import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Decoration from "../../../assets/home/Decoration.svg";
import './contact.scss';

const schema = z.object({
    name: z.string()
        .min(2, { message: "Imie musi mieć minimum 2 litery" })
        .regex(/^\S+$/, { message: "Pole powinno zawierać tylko jeden wyraz" }),
    email: z.string().email({ message: "Nieprawidłowy adres email" }),
    message: z.string().min(120, { message: "Wiadomość musi zawierać przynajmniej 120 znaków" })
});

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return (
        <>
            <section id="contact" className="container">
                <div className="container__contact">
                    <div className="container__contact__info">
                        <h2 className="container__contact__info__title">Skontaktuj się z nami</h2>
                        <div className="container__contact__info__decoration">
                            <img src={Decoration} alt="Decoration" />
                        </div>
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
                <p className="footer__txt">Copyright by Coders Lab</p>
            </footer>
        </>
    );
}

export default Contact;