import React from "react";
import css from "./Cases.module.css";
import Card from "./Card/Card";

const Cases = () => {
  return (
    <div className={css.container}>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Cases;
