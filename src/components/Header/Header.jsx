import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/images/logo.svg?react";
import BurgerIcon from "../../assets/images/burger.svg?react";
import ArrowDown from "../../assets/images/arrow-down.svg?react ";
import { Link } from "react-scroll";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header>
      <div className={css.section}>
        <span>
          <Logo className={css.logo} alt="logo" />
        </span>
        <div className={css.navContainer}>
          <span className={css.wrapBurger}>
            <BurgerIcon className={css.burger} />
          </span>
          <Link to="contacts" smooth={true} duration={1000}>
            <button className={css.btn}>
              <span className={css.btnText}>Get in touch</span>
              <ArrowDown className={css.arrow} />
            </button>
          </Link>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};
export default Header;
