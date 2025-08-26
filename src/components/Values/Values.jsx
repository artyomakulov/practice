/* eslint-disable no-unused-vars */
import React from "react";
import css from "./Values.module.css";
import { valuesData } from "./data";
import ManWorker from "../../assets/images/man-worker.png";
import WindFarms from "../../assets/images/wind-farms-fields.png";

const Values = () => {
  return (
    <div className={css.section}>
      {valuesData.map(({ image: Icon, title, text }, index) => (
        <React.Fragment key={title}>
          <div className={css.card}>
            <div className={css.titleWrap}>
              <Icon className={css.iconSvg} />
              <h4 className={css.title}>{title}</h4>
            </div>
            <div className={css.textWrap}>
              <p className={css.text}>{text}</p>
            </div>
          </div>

          {index === 1 && (
            <>
              <div className={css.imageWrapper}>
                <img src={ManWorker} alt="man worker" className={css.image} />
              </div>
              <div className={css.imageWrapper}>
                <img src={WindFarms} alt="wind fields" className={css.image} />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default Values;
