import React from "react";
import style from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <header className={style.header}>
            <a href="/">
                <img
                    src="https://logoeps.com/wp-content/uploads/2014/09/34405-linkedin-logo-icon-vector-icon-vector-eps.png"/>
            </a>
            <div className={style.loginBlock}>
                <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>
            </div>
        </header>
    );
};

export default Header;
