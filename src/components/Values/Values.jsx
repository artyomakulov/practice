/* eslint-disable no-unused-vars */
import React from "react";
import css from "./Values.module.css";
import { valuesData } from "./data";

const Values = () => {
  return (
    <div className={css.container}>
      {valuesData.map(({ image: Icon, title, text }, index) => (
        <React.Fragment key={title}>
          <div className={css.card}>
            <div className={css.titleWrap}>
              <Icon />
              <h4 className={css.title}>{title}</h4>
            </div>
            <div className={css.textWrap}>
              <p className={css.text}>{text}</p>
            </div>
          </div>

          {index === 1 && (
            <img src="/src/assets/images/man-worker.png" alt="man worker" />
          )}
          {index === 3 && (
            <img
              src="/src/assets/images/wind-farms-fields 1.png"
              alt="wind filds"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default Values;
