import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ScrollNav from "../scrollNav/ScrollNav";
import Navbar from "../navbar/Navbar";
import Decoration from "../../assets/home/Decoration.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './register.scss';

const registrationSchema = z.object({
    email: z.string().email({ message: "Podany email jest nieprawidłowy" }),
    password: z.string().min(6, { message: "Podane hasło jest za krótkie" }),
    repeatPassword: z.string().min(6, { message: "Powtórzone hasło jest za krótkie" })
}).refine((data) => data.password === data.repeatPassword, {
    message: "Hasła nie są takie same",
    path: ["repeatPassword"],
});

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registrationSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="register-container">
            <header className="home-header">
                <div className="home-header__content">
                    <nav className="home-header__navbar">
                        <Navbar />
                    </nav>
                    <div className="home-header__scroll-nav">
                        <Link to="/" className="home-header__scroll-nav__home">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        {/* <ScrollNav /> */}
                    </div>
                </div>
            </header>
            <section className="register-section">
                <div className="register-section__title">
                    <p>Zarejestruj się</p>
                </div>
                <div className="register-section__decoration">
                    <img src={Decoration} alt="Dekoracja" className="register-section__decoration__image" />
                </div>
                <form className="register-section__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="register-section__form__input">
                        <label className="register-section__form__input__label">
                            <p>Email</p>
                            <input type="text" {...register("email")} className="register-section__form__input__label__input" />
                            {errors.email && <p className="register-section__form__input__label__error">{errors.email.message}</p>}
                        </label>
                        <label className="register-section__form__input__label">
                            <p>Hasło</p>
                            <input type="password" {...register("password")} className="register-section__form__input__label__input" /> 
                            {errors.password && <p className="register-section__form__input__label__error">{errors.password.message}</p>}
                        </label>
                        <label className="register-section__form__input__label">
                            <p>Powtórz hasło</p>
                            <input type="password" {...register("repeatPassword")} className="register-section__form__input__label__input" />
                            {errors.repeatPassword && <p className="register-section__form__input__label__error">{errors.repeatPassword.message}</p>}
                        </label>
                    </div>
                    <div className="register-section__form__actions">
                        <Link to="/login" className="register-section__form__actions__button">Zaloguj się</Link>
                        <button type="submit" className="register-section__form__actions__button">Załóż konto</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Register;