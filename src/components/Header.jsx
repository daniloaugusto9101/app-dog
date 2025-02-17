import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg?react";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.log} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={style.login} to="/login">
          Logon / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
