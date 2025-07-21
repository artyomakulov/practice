import React from "react";
import css from "./Card.module.css";
import ArrowRight from "../../../assets/images/arrow-righttop.svg?react";

const Card = () => {
  return (
    <div className={css.card}>
      <div>
        <img
          src="/src/assets/images/beautiful-view-wind-turbines-grass-covered-field-captured-holland.png"
          className={css.image}
        />
      </div>
      <div className={css.textContainer}>
        <p className={css.text}>
          Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
        </p>
        <span className={css.arrowWrap}>
          <ArrowRight className={css.arrow} />
        </span>
      </div>
      <div className={css.description}>
        <div className={css.descContainer}>
          <p className={css.descText}>Wind Power for auto field irrigation</p>
          <p className={css.descDate}>July 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
