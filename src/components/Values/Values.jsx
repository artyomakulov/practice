import React from "react";
import css from "./Values.module.css";
import { valuesData } from "./data";

const Values = () => {
  return (
    <div className={css.container}>
      {valuesData.map(({ image: Icon, title, text }) => (
        <div key={title} className={css.card}>
          <div className={css.titleWrap}>
            <Icon />
            <h4 className={css.title}>{title}</h4>
          </div>
          <div className={css.textWrap}>
            <p className={css.text}>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
