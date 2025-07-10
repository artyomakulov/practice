import React from "react";
import css from "./Main.module.css";
import ArrowRight from "../../assets/images/arrow-right.svg?react";

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.textSection}>
        <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.description}>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <button className={css.btn}>
            <span className={css.btnText}>Learn more</span>
            <span className={css.wrapArrow}>
              <ArrowRight className={css.arrow} />
            </span>
          </button>
        </div>
      </div>

      <div>
        <address className={css.address}>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <a href="mailto:office@ecosolution.com" className={css.link}>
            office@ecosolution.com
          </a>
          <p className={css.copyright}>ecosolution © 2023</p>
        </address>
      </div>
    </div>
  );
};

export default Main;
