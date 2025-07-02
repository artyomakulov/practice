import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/images/logo.svg?react";
import BurgerIcon from "../../assets/images/burger.svg?react";

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        {/* <img src={logo} alt="Logo" className={css.logo} /> */}
        <Logo className={css.logo} alt="logo" />
        <BurgerIcon className={css.burger} />
      </div>
    </header>
  );
};
export default Header;
