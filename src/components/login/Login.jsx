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
import './login.scss'

const loginSchema = z.object({
    email: z.string().email({ message: "Podany email jest nieprawidłowy" }),
    password: z.string().min(6, { message: "Podane haso jest za krótkie" }),
});

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="login-container">
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
            <section className="login-section">
                <div className="login-section__title">
                    <p>Zaloguj się</p>
                </div>
                <div className="login-section__decoration">
                    <img src={Decoration} alt="Dekoracja" className="login-section__decoration__image" />
                </div>
                <form className="login-section__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-section__form__input" >
                        <label className="login-section__form__input__label">
                            <p>Email</p>
                            <input type="text" {...register("email")} className="login-section__form__input__label__input" />
                            {errors.email && <p className="login-section__form__input__label__error">{errors.email.message}</p>}
                        </label>
                        <label className="login-section__form__input__label">
                            <p>Hasło</p>
                            <input type="password" {...register("password")} className="login-section__form__input__label__input" />
                            {errors.password && <p className="login-section__form__input__label__error">{errors.password.message}</p>}
                        </label>
                    </div>
                    <div className="login-section__form__actions">
                        <button type="submit" className="login-section__form__actions__button">Zaloguj się</button>
                        <Link to="/register" type="button" className="login-section__form__actions__button">Załóż konto</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;