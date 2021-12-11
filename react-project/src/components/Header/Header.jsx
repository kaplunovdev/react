import React from "react";
import style from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <a href="/">
        <img src="https://logoeps.com/wp-content/uploads/2014/09/34405-linkedin-logo-icon-vector-icon-vector-eps.png" />
      </a>
    </header>
  );
};

export default Header;
