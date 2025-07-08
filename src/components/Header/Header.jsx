import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/images/logo.svg?react";
import BurgerIcon from "../../assets/images/burger.svg?react";
import ArrowDown from "../../assets/images/arrow-down.svg?react ";

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <span>
          <Logo className={css.logo} alt="logo" />
        </span>
        <div className={css.navContainer}>
          <span className={css.wrapBurger}>
            <BurgerIcon className={css.burger} />
          </span>
          <button className={css.btn}>
            <span>Get in touch</span>
            <ArrowDown className={css.arrow} />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
