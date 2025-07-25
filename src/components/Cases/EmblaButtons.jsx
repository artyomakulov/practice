import React from "react";
import css from "./Cases.module.css";
import Right from "../../assets/images/right.svg?react";
import Left from "../../assets/images/left.svg?react";

export const PrevButton = ({ onClick }) => (
  <button onClick={onClick} className={css.arrowButton}>
    <Left />
  </button>
);

export const NextButton = ({ onClick }) => (
  <button onClick={onClick} className={css.arrowButton}>
    <Right />
  </button>
);
