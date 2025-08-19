import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/images/logo.svg?react";
import ArrowTop from "../../assets/images/arrow-top.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Instagram from "../../assets/images/instagram.svg?react";

const Footer = () => {
  return (
    <footer className={css.section}>
      <div className={css.logoContainer}>
        <Logo className={css.logo} alt="logo" />
        <button className={css.btn}>
          <div className={css.arrowWrap}>
            <ArrowTop className={css.arrow} />
          </div>
        </button>
      </div>
      <div className={css.socials}>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Facebook className={css.social} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Instagram className={css.social} />
        </a>
      </div>
      <div className={css.contacts}>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p> office@ecosolution.com</p>
        <p>ecosolution © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
