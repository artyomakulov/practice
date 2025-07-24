import React from "react";
import css from "./Card.module.css";
import ArrowRight from "../../../assets/images/arrow-righttop.svg?react";

const Card = ({ item }) => {
  return (
    <div className={css.card}>
      <div>
        <img src={item.image} className={css.image} />
      </div>
      <div className={css.textContainer}>
        <p className={css.text}>{item.text}</p>
        <span className={css.arrowWrap}>
          <ArrowRight className={css.arrow} />
        </span>
      </div>
      <div className={css.description}>
        <div className={css.descContainer}>
          <p className={css.descText}>{item.descText}</p>
          <p className={css.descDate}>{item.descDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
