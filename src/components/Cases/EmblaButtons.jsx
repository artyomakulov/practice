import React from "react";
import css from "./Cases.module.css";

export const PrevButton = ({ onClick }) => (
  <button onClick={onClick} className={css.arrowButton}>
    ←
  </button>
);

export const NextButton = ({ onClick }) => (
  <button onClick={onClick} className={css.arrowButton}>
    →
  </button>
);
